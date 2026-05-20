import React from 'react'
import { resolveComponent } from './componentRegistry'
import { mergeWithDefaults } from './componentSchemas'

function NavbarWrapper({ variant, children }) {
  if (variant === 'absolute-top') {
    return (
      <div className="absolute top-2 left-0 w-full z-50">{children}</div>
    )
  }
  return children
}

/**
 * Renders a CMS page config (JSON) using the component registry.
 */
export default function PageRenderer({ pageConfig }) {
  const blocks = [...(pageConfig?.blocks ?? [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  )

  return (
    <div className="relative" data-cms-page-root>
      <main>
        {blocks.map((block) => {
          const Component = resolveComponent(block.componentId)
          if (!Component) {
            if (import.meta.env.DEV) {
              console.warn(
                `[CMS] Unknown componentId "${block.componentId}" on block "${block.instanceId}"`,
              )
            }
            return null
          }

          const props = mergeWithDefaults(block.componentId, block.props ?? {})
          const section = <Component key={block.instanceId} {...props} />

          if (block.componentId === 'navbar') {
            return (
              <NavbarWrapper
                key={block.instanceId}
                variant={pageConfig?.pageLayout?.navbarWrapper}
              >
                {section}
              </NavbarWrapper>
            )
          }

          return section
        })}
      </main>
    </div>
  )
}
