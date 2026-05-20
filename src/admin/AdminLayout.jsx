import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './components/AdminSidebar'

const STORAGE_KEY = 'nfci-admin-sidebar-open'

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      return stored !== 'false'
    } catch {
      return true
    }
  })

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, String(sidebarOpen))
    } catch {
      /* ignore */
    }
  }, [sidebarOpen])

  return (
    <div data-admin-shell className="flex min-h-screen overflow-x-hidden bg-[#FAF6F1]">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-[#01101D]/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`flex min-h-screen min-w-0 flex-1 flex-col overflow-x-hidden transition-[margin] duration-300 ease-in-out ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
        }`}
      >
        <header className="sticky top-0 z-30 flex shrink-0 items-center gap-4 border-b border-[#e8e0d6] bg-white/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label={sidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
            aria-expanded={sidebarOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e8e0d6] bg-[#FAF6F1] text-[#333] transition-colors hover:border-nfci-red hover:text-nfci-red"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {sidebarOpen ? (
                <>
                  <path d="M15 18l-6-6 6-6" />
                </>
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </>
              )}
            </svg>
          </button>

          <div className="min-w-0 flex-1">
            <p className="font-lora text-sm text-[#333]/60">
              NFCI ADMIN
            </p>
            {!sidebarOpen && (
              <p className="font-lora text-xs text-nfci-red">
                Sidebar hidden — more space for desktop preview
              </p>
            )}
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
