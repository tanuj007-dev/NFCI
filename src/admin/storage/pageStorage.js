import homePage from '../../cms/pages/home.json'
import placementPage from '../../cms/pages/placement.json'

const STORAGE_KEY = 'nfci-cms-pages'

const BUILTIN_DEFAULTS = {
  home: homePage,
  placement: placementPage,
}

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeStore(pages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pages))
}

export function isBuiltinPage(pageId) {
  return Object.hasOwn(BUILTIN_DEFAULTS, pageId)
}

/** All pages: built-in defaults merged with localStorage overrides + custom pages */
export function loadAllPages() {
  const stored = readStore()
  const merged = { ...BUILTIN_DEFAULTS }

  for (const [id, config] of Object.entries(stored)) {
    merged[id] = config
  }

  return merged
}

export function getStoredPage(pageId) {
  const all = loadAllPages()
  return all[pageId] ?? null
}

export function savePage(pageId, pageConfig) {
  const stored = readStore()
  stored[pageId] = { ...pageConfig, id: pageId }
  writeStore(stored)
}

export function deletePage(pageId) {
  if (isBuiltinPage(pageId)) return false
  const stored = readStore()
  delete stored[pageId]
  writeStore(stored)
  return true
}

export function createPage({ id, title, slug, description = '' }) {
  const pageId = id.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  if (!pageId) throw new Error('Invalid page id')
  if (getStoredPage(pageId)) throw new Error('Page already exists')

  const config = {
    id: pageId,
    slug: slug.startsWith('/') ? slug : `/${slug}`,
    title,
    description,
    blocks: [],
  }
  savePage(pageId, config)
  return pageId
}

export function listPages() {
  return Object.entries(loadAllPages()).map(([id, config]) => ({
    id,
    title: config.title ?? id,
    slug: config.slug ?? '/',
    blockCount: config.blocks?.length ?? 0,
    builtin: isBuiltinPage(id),
  }))
}

export function exportAllPagesJson() {
  return JSON.stringify(loadAllPages(), null, 2)
}

export function importPagesJson(jsonString) {
  const parsed = JSON.parse(jsonString)
  if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON')
  writeStore(parsed)
}

export function resetPageToDefault(pageId) {
  if (!isBuiltinPage(pageId)) return false
  const stored = readStore()
  delete stored[pageId]
  writeStore(stored)
  return true
}

export function generateInstanceId(pageId, componentId) {
  return `${pageId}-${componentId}-${Date.now()}`
}
