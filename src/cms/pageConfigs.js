import { getStoredPage, loadAllPages } from '../admin/storage/pageStorage'

export { loadAllPages as getAllPageConfigs }

export function getPageConfig(pageId) {
  return getStoredPage(pageId)
}
