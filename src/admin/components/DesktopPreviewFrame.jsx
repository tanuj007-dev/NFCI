import { useCallback, useEffect, useRef, useState } from 'react'

export const ADMIN_DESKTOP_WIDTH = 1440

const PREVIEW_SCROLL_MAX = 'min(calc(100vh - 12rem), 820px)'

function PreviewChrome({ label, scale, children, scrollable }) {
  const scaleLabel =
    scale >= 0.99 ? '100%' : `${Math.round(scale * 100)}% fit`

  return (
    <div
      className={`max-w-full overflow-hidden rounded-2xl border border-[#e8e0d6] bg-[#01101D]/5 shadow-sm ${
        scrollable ? 'flex max-h-full flex-col' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e8e0d6] bg-[#FAF6F1] px-4 py-2">
        <span className="font-lora text-xs text-[#333]/70">{label}</span>
        <span className="rounded-full bg-white px-2 py-0.5 font-mono text-[10px] text-nfci-red ring-1 ring-[#e8e0d6]">
          {ADMIN_DESKTOP_WIDTH}px desktop · {scaleLabel}
        </span>
      </div>
      {children}
    </div>
  )
}

function useDesktopScale() {
  const [shellNode, setShellNode] = useState(null)
  const [scale, setScale] = useState(1)
  const [scaledWidth, setScaledWidth] = useState(ADMIN_DESKTOP_WIDTH)

  const shellRef = useCallback((node) => {
    setShellNode(node)
  }, [])

  useEffect(() => {
    if (!shellNode) return

    const update = () => {
      const available = shellNode.clientWidth
      const nextScale = Math.min(1, available / ADMIN_DESKTOP_WIDTH)
      setScale(nextScale)
      setScaledWidth(Math.floor(ADMIN_DESKTOP_WIDTH * nextScale))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(shellNode)
    return () => ro.disconnect()
  }, [shellNode])

  return { shellRef, scale, scaledWidth }
}

/** Scale 1440px canvas — wrapper clips so layout width = scaledWidth only */
function ScaledDesktopCanvas({ children, label, scrollable }) {
  const contentRef = useRef(null)
  const { shellRef, scale, scaledWidth } = useDesktopScale()
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const update = () => setContentHeight(content.scrollHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(content)
    return () => ro.disconnect()
  }, [children, scale])

  const scaledHeight = Math.max(Math.ceil(contentHeight * scale), 1)

  return (
    <PreviewChrome label={label} scale={scale} scrollable={scrollable}>
      <div
        ref={shellRef}
        className={`box-border w-full max-w-full overflow-x-hidden bg-[#1a1a1a]/5 p-3 ${
          scrollable ? 'overflow-y-auto' : 'overflow-hidden'
        }`}
        style={scrollable ? { maxHeight: PREVIEW_SCROLL_MAX } : undefined}
      >
        <div
          className="relative mx-auto overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5"
          style={{
            width: scaledWidth,
            height: scaledHeight,
            maxWidth: '100%',
          }}
        >
          <div
            className="absolute left-0 top-0 overflow-hidden"
            style={{ width: scaledWidth, height: scaledHeight }}
          >
            <div
              style={{
                width: ADMIN_DESKTOP_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            >
              <div ref={contentRef} className="admin-desktop-preview overflow-x-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewChrome>
  )
}

function measureIframeContent(iframe) {
  const doc = iframe?.contentDocument
  if (!doc) return 0

  const root =
    doc.querySelector('[data-cms-page-root]') ??
    doc.querySelector('main') ??
    doc.body

  const rect = root.getBoundingClientRect()
  return Math.ceil(Math.max(rect.height, root.scrollHeight, root.offsetHeight))
}

function DesktopPreviewIframe({ pageId, label, scrollable }) {
  const iframeRef = useRef(null)
  const { shellRef, scale, scaledWidth } = useDesktopScale()
  const [iframeHeight, setIframeHeight] = useState(0)

  const updateIframeHeight = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    try {
      const h = measureIframeContent(iframe)
      if (h > 0) setIframeHeight(Math.min(h, 12000))
    } catch {
      /* cross-origin or not ready */
    }
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let resizeObserver = null

    const onLoad = () => {
      updateIframeHeight()
      try {
        const doc = iframe.contentDocument
        const root = doc?.querySelector('[data-cms-page-root]') ?? doc?.body
        if (!root) return
        resizeObserver?.disconnect()
        resizeObserver = new ResizeObserver(updateIframeHeight)
        resizeObserver.observe(root)
      } catch {
        /* ignore */
      }
    }

    iframe.addEventListener('load', onLoad)
    if (iframe.contentDocument?.readyState === 'complete') onLoad()

    return () => {
      iframe.removeEventListener('load', onLoad)
      resizeObserver?.disconnect()
    }
  }, [pageId, updateIframeHeight])

  const scaledHeight = Math.max(Math.ceil(iframeHeight * scale), 1)

  return (
    <PreviewChrome label={label} scale={scale} scrollable={scrollable}>
      <div
        ref={shellRef}
        className={`box-border w-full max-w-full overflow-x-hidden bg-[#1a1a1a]/5 p-3 ${
          scrollable ? 'overflow-y-auto' : 'overflow-hidden'
        }`}
        style={scrollable ? { maxHeight: PREVIEW_SCROLL_MAX } : undefined}
      >
        <div
          className="relative mx-auto overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5"
          style={{
            width: scaledWidth,
            height: scaledHeight,
            maxWidth: '100%',
          }}
        >
          <iframe
            ref={iframeRef}
            title="Desktop page preview"
            src={`/preview/${pageId}?embed=1`}
            scrolling="no"
            className="absolute left-0 top-0 border-0 bg-white"
            style={{
              width: ADMIN_DESKTOP_WIDTH,
              height: iframeHeight,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        </div>
      </div>
    </PreviewChrome>
  )
}

export default function DesktopPreviewFrame({
  children,
  label = 'Desktop preview',
  pageId,
  mode = 'canvas',
  scrollable = false,
}) {
  if (pageId && mode === 'iframe') {
    return (
      <DesktopPreviewIframe
        pageId={pageId}
        label={label}
        scrollable={scrollable}
      />
    )
  }

  return (
    <ScaledDesktopCanvas label={label} scrollable={scrollable}>
      {children}
    </ScaledDesktopCanvas>
  )
}
