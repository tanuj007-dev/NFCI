import { COMPONENT_CATALOG } from '../../cms/componentIds'

const CATEGORIES = [
  { key: 'navigation', label: 'Navigation' },
  { key: 'hero', label: 'Hero & banners' },
  { key: 'content', label: 'Content' },
  { key: 'events', label: 'Events' },
  { key: 'blog', label: 'Blog' },
  { key: 'courses', label: 'Courses' },
]

export default function ComponentSelectDropdown({ value, onChange, onAdd, disabled }) {
  const handleAdd = () => {
    if (!value) return
    onAdd(value)
    onChange('')
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
      <label className="min-w-0 flex-1">
        <span className="font-lora text-sm font-medium text-[#333]">
          Add section (dropdown)
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="mt-1 w-full rounded-xl border border-[#e8e0d6] bg-white px-4 py-2.5 font-lora text-sm outline-none focus:border-nfci-red disabled:opacity-50"
        >
          <option value="">— Select a component —</option>
          {CATEGORIES.map((cat) => (
            <optgroup key={cat.key} label={cat.label}>
              {COMPONENT_CATALOG.filter((c) => c.category === cat.key).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label} ({item.id})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
      <button
        type="button"
        onClick={handleAdd}
        disabled={!value || disabled}
        className="shrink-0 rounded-full bg-nfci-red px-5 py-2.5 font-lora text-sm font-medium text-white transition-colors hover:bg-nfci-red-hover disabled:opacity-50"
      >
        Add to page
      </button>
    </div>
  )
}
