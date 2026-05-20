import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import CmsPage from './CmsPage'

export default function CmsPreviewPage() {
  const { pageId } = useParams()
  const [search] = useSearchParams()
  const isEmbed = search.get('embed') === '1'

  useEffect(() => {
    if (isEmbed) {
      document.documentElement.dataset.embedPreview = 'true'
    }
    return () => {
      delete document.documentElement.dataset.embedPreview
    }
  }, [isEmbed])

  return <CmsPage pageId={pageId} />
}
