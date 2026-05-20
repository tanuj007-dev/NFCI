import React from 'react'
import PageRenderer from '../cms/PageRenderer'
import { getPageConfig } from '../cms/pageConfigs'

/**
 * Generic CMS page — renders any page defined in src/cms/pages/*.json
 * @param {{ pageId: string }} props
 */
export default function CmsPage({ pageId }) {
  const pageConfig = getPageConfig(pageId)

  if (!pageConfig) {
    return (
      <p className="p-8 text-center text-red-600">
        Page config not found: {pageId}
      </p>
    )
  }

  return <PageRenderer pageConfig={pageConfig} />
}
