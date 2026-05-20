import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getComponentMeta } from '../../cms/componentIds'
import { getDefaultProps } from '../../cms/componentSchemas'
import {
  generateInstanceId,
  getStoredPage,
  isBuiltinPage,
  resetPageToDefault,
  savePage,
} from '../storage/pageStorage'
import AdminButton from '../components/AdminButton'
import BlockPreview from '../components/BlockPreview'
import DesktopPreviewFrame from '../components/DesktopPreviewFrame'
import BlockPropsForm from '../components/BlockPropsForm'
import ComponentSelectDropdown from '../components/ComponentSelectDropdown'

function normalizeOrders(blocks) {
  return blocks.map((b, i) => ({ ...b, order: i + 1 }))
}

export default function PageEditor() {
  const { pageId } = useParams()
  const navigate = useNavigate()
  const [config, setConfig] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [pickComponent, setPickComponent] = useState('')
  const [saved, setSaved] = useState(false)
  const [previewMode, setPreviewMode] = useState('page')
  const [previewKey, setPreviewKey] = useState(0)

  useEffect(() => {
    const page = getStoredPage(pageId)
    if (!page) {
      navigate('/admin/pages')
      return
    }
    setConfig(structuredClone(page))
    setSelectedIndex(0)
  }, [pageId, navigate])

  if (!config) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-nfci-red border-t-transparent" />
      </div>
    )
  }

  const blocks = [...(config.blocks ?? [])].sort((a, b) => a.order - b.order)
  const selected = blocks[selectedIndex]
  const selectedMeta = selected ? getComponentMeta(selected.componentId) : null

  const persist = (next) => {
    setConfig(next)
    savePage(pageId, next)
    setPreviewKey((k) => k + 1)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateBlocks = (newBlocks) => {
    persist({ ...config, blocks: normalizeOrders(newBlocks) })
  }

  const handleAddBlock = (componentId) => {
    if (!componentId) return
    const block = {
      instanceId: generateInstanceId(pageId, componentId),
      componentId,
      order: blocks.length + 1,
      props: getDefaultProps(componentId),
    }
    updateBlocks([...blocks, block])
    setSelectedIndex(blocks.length)
    setPickComponent('')
  }

  const updateBlockProps = (props) => {
    const nextBlocks = blocks.map((b, i) =>
      i === selectedIndex ? { ...b, props } : b,
    )
    persist({ ...config, blocks: normalizeOrders(nextBlocks) })
  }

  const moveBlock = (index, direction) => {
    const next = [...blocks]
    const target = index + direction
    if (target < 0 || target >= next.length) return
    ;[next[index], next[target]] = [next[target], next[index]]
    updateBlocks(next)
    setSelectedIndex(target)
  }

  const removeBlock = (index) => {
    if (!window.confirm('Remove this section from the page?')) return
    const next = blocks.filter((_, i) => i !== index)
    updateBlocks(next)
    setSelectedIndex(Math.max(0, index - 1))
  }

  const updateMeta = (field, value) => {
    persist({ ...config, [field]: value })
  }

  const updateLayout = (navbarWrapper) => {
    persist({
      ...config,
      pageLayout: navbarWrapper ? { navbarWrapper } : undefined,
    })
  }

  return (
    <div className="min-w-0 max-w-full overflow-x-hidden pb-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link
            to="/admin/pages"
            className="font-lora text-sm text-nfci-red hover:underline"
          >
            ← Back to pages
          </Link>
          <h1 className="mt-2 font-new-york text-4xl text-[#333]">
            Edit: {config.title}
          </h1>
          <p className="mt-1 font-mono text-sm text-[#333]/50">{pageId}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {saved && (
            <span className="font-lora text-sm text-green-700">Saved</span>
          )}
          <a href={`/preview/${pageId}`} target="_blank" rel="noreferrer">
            <AdminButton variant="secondary">Open full preview</AdminButton>
          </a>
          {isBuiltinPage(pageId) && (
            <AdminButton
              variant="danger"
              onClick={() => {
                if (
                  window.confirm(
                    'Reset this page to the original built-in JSON?',
                  )
                ) {
                  resetPageToDefault(pageId)
                  window.location.reload()
                }
              }}
            >
              Reset default
            </AdminButton>
          )}
        </div>
      </div>

      {/* Page meta */}
      <section className="mt-6 rounded-2xl border border-[#e8e0d6] bg-white p-5">
        <h2 className="font-new-york text-lg text-[#333]">Page settings</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="font-lora text-xs text-[#333]/70">Title</span>
            <input
              value={config.title ?? ''}
              onChange={(e) => updateMeta('title', e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
            />
          </label>
          <label className="block">
            <span className="font-lora text-xs text-[#333]/70">Slug</span>
            <input
              value={config.slug ?? ''}
              onChange={(e) => updateMeta('slug', e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="font-lora text-xs text-[#333]/70">Navbar layout</span>
            <select
              value={config.pageLayout?.navbarWrapper ?? ''}
              onChange={(e) => updateLayout(e.target.value || null)}
              className="mt-1 w-full rounded-xl border border-[#e8e0d6] bg-white px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
            >
              <option value="">Default</option>
              <option value="absolute-top">Absolute top (home)</option>
            </select>
          </label>
        </div>
      </section>

      {/* Add section dropdown */}
      <section className="mt-6 rounded-2xl border border-[#e8e0d6] bg-white p-5">
        <ComponentSelectDropdown
          value={pickComponent}
          onChange={setPickComponent}
          onAdd={handleAddBlock}
        />
      </section>

      {/* Sections | Edit content | Desktop preview — one row */}
      <div className="mt-6 flex items-start gap-4 overflow-x-auto">
        <section className="flex w-[220px] shrink-0 flex-col rounded-2xl border border-[#e8e0d6] bg-white p-4">
          <h2 className="shrink-0 font-new-york text-lg text-[#333]">
            Sections ({blocks.length})
          </h2>
          <ul className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto">
            {blocks.map((block, index) => {
              const meta = getComponentMeta(block.componentId)
              const isSelected = index === selectedIndex
              return (
                <li
                  key={block.instanceId}
                  className={`rounded-xl border p-3 ${
                    isSelected
                      ? 'border-nfci-red bg-nfci-red/5'
                      : 'border-[#e8e0d6] bg-[#FAF6F1]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="w-full text-left"
                  >
                    <p className="font-lora text-sm font-medium text-[#333]">
                      {index + 1}. {meta?.label ?? block.componentId}
                    </p>
                    <p className="font-mono text-xs text-[#333]/50">
                      {block.componentId}
                    </p>
                  </button>
                  <div className="mt-2 flex gap-1">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => moveBlock(index, -1)}
                      className="rounded border border-[#e8e0d6] px-2 py-0.5 text-xs disabled:opacity-30"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      disabled={index === blocks.length - 1}
                      onClick={() => moveBlock(index, 1)}
                      className="rounded border border-[#e8e0d6] px-2 py-0.5 text-xs disabled:opacity-30"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => removeBlock(index)}
                      className="ml-auto text-xs text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              )
            })}
            {blocks.length === 0 && (
              <p className="py-6 text-center font-lora text-sm text-[#333]/50">
                Use the dropdown above to add sections.
              </p>
            )}
          </ul>
        </section>

        <section className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-[#e8e0d6] bg-white p-4">
          <h2 className="shrink-0 font-new-york text-base leading-snug text-[#333]">
            {selected
              ? `Edit — ${selectedMeta?.label ?? selected.componentId}`
              : 'Edit content'}
          </h2>
          <p className="mt-1 shrink-0 font-lora text-xs text-[#333]/60">
            Updates live in preview · auto-saved
          </p>
          <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
            {selected ? (
              <BlockPropsForm
                componentId={selected.componentId}
                props={selected.props ?? {}}
                onChange={updateBlockProps}
              />
            ) : (
              <p className="font-lora text-sm text-[#333]/50">
                Select a section to edit.
              </p>
            )}
          </div>
        </section>

        <section className="flex min-w-[320px] flex-1 flex-col self-start rounded-2xl border border-[#e8e0d6] bg-white p-4">
          <div className="mb-3 flex shrink-0 flex-wrap items-center justify-between gap-2">
            <h2 className="font-new-york text-lg text-[#333]">Preview</h2>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setPreviewMode('section')}
                className={`rounded-full px-3 py-1 font-lora text-xs ${
                  previewMode === 'section'
                    ? 'bg-nfci-red text-white'
                    : 'bg-[#FAF6F1] text-[#333] border border-[#e8e0d6]'
                }`}
              >
                Section
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('page')}
                className={`rounded-full px-3 py-1 font-lora text-xs ${
                  previewMode === 'page'
                    ? 'bg-nfci-red text-white'
                    : 'bg-[#FAF6F1] text-[#333] border border-[#e8e0d6]'
                }`}
              >
                Full page
              </button>
            </div>
          </div>

          <div className="shrink-0">
            {previewMode === 'section' ? (
              <BlockPreview
                block={selected}
                pageLayout={config.pageLayout}
              />
            ) : blocks.length === 0 ? (
              <div className="flex h-full min-h-[200px] items-center justify-center rounded-xl border border-dashed border-[#e8e0d6] font-lora text-sm text-[#333]/50">
                No sections to preview
              </div>
            ) : (
              <DesktopPreviewFrame
                key={previewKey}
                label="Desktop · 1440px"
                pageId={pageId}
                mode="iframe"
                scrollable
              />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
