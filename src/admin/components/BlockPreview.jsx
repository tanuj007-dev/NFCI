import { resolveComponent } from '../../cms/componentRegistry'
import { mergeWithDefaults } from '../../cms/componentSchemas'
import DesktopPreviewFrame from './DesktopPreviewFrame'
import NavbarWrapper from './preview/NavbarWrapper'

export default function BlockPreview({ block, pageLayout }) {
  if (!block) {
    return (
      <div className="flex h-full min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-[#e8e0d6] bg-white font-lora text-sm text-[#333]/50">
        Select a section to preview
      </div>
    )
  }

  const Component = resolveComponent(block.componentId)
  if (!Component) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 font-lora text-sm text-red-700">
        Unknown component: {block.componentId}
      </div>
    )
  }

  const props = mergeWithDefaults(block.componentId, block.props ?? {})
  const section = <Component {...props} />

  return (
    <DesktopPreviewFrame label={`Section · ${block.componentId}`}>
      {block.componentId === 'navbar' ? (
        <NavbarWrapper variant={pageLayout?.navbarWrapper}>{section}</NavbarWrapper>
      ) : (
        section
      )}
    </DesktopPreviewFrame>
  )
}
