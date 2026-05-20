import { useMemo, useState } from 'react'
import { COMPONENT_CATALOG } from '../../cms/componentIds'
import AdminButton from './AdminButton'

const CATEGORIES = ['navigation', 'hero', 'content', 'events', 'blog', 'courses']

export default function AddBlockModal({ open, onClose, onAdd }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    return COMPONENT_CATALOG.filter((item) => {
      const matchCat = category === 'all' || item.category === category
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        item.id.includes(q) ||
        item.label.toLowerCase().includes(q) ||
        item.file.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, category])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#01101D]/60 p-4">
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl bg-[#FAF6F1] shadow-2xl">
        <div className="border-b border-[#e8e0d6] px-6 py-4">
          <h2 className="font-new-york text-2xl text-[#333]">Add section</h2>
          <p className="mt-1 font-lora text-sm text-[#333]/60">
            Pick a component from the registry (49 available)
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-[#e8e0d6] px-6 py-3">
          <button
            type="button"
            onClick={() => setCategory('all')}
            className={`rounded-full px-3 py-1 font-lora text-xs ${
              category === 'all'
                ? 'bg-nfci-red text-white'
                : 'bg-white text-[#333] border border-[#e8e0d6]'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3 py-1 font-lora text-xs capitalize ${
                category === cat
                  ? 'bg-nfci-red text-white'
                  : 'bg-white text-[#333] border border-[#e8e0d6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="px-6 py-3">
          <input
            type="search"
            placeholder="Search by id, label, or file…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#e8e0d6] bg-white px-4 py-2.5 font-lora text-sm outline-none focus:border-nfci-red"
          />
        </div>

        <ul className="flex-1 overflow-y-auto px-4 pb-4">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  onAdd(item.id)
                  onClose()
                  setSearch('')
                }}
                className="mb-2 flex w-full items-center justify-between rounded-xl border border-[#e8e0d6] bg-white px-4 py-3 text-left transition-colors hover:border-nfci-red"
              >
                <div>
                  <p className="font-lora text-sm font-medium text-[#333]">
                    {item.label}
                  </p>
                  <p className="font-mono text-xs text-[#333]/50">{item.id}</p>
                </div>
                <span className="rounded-full bg-[#FAF6F1] px-2 py-0.5 font-lora text-xs capitalize text-nfci-red">
                  {item.category}
                </span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center font-lora text-sm text-[#333]/50">
              No components match your search.
            </p>
          )}
        </ul>

        <div className="border-t border-[#e8e0d6] px-6 py-4">
          <AdminButton variant="secondary" onClick={onClose} className="w-full">
            Cancel
          </AdminButton>
        </div>
      </div>
    </div>
  )
}
