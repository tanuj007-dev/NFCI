import { getComponentSchema } from '../../cms/componentSchemas'

function ImageField({ value, onChange, label }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 800_000) {
      alert('Image is large (>800KB). Consider using a URL for better performance.')
    }
    const reader = new FileReader()
    reader.onload = () => onChange(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-2">
      <span className="font-lora text-sm font-medium text-[#333]">{label}</span>
      {value && (
        <img
          src={value}
          alt=""
          className="max-h-28 rounded-lg border border-[#e8e0d6] object-contain"
        />
      )}
      <input
        type="url"
        value={typeof value === 'string' && !value.startsWith('data:') ? value : ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Image URL"
        className="w-full rounded-xl border border-[#e8e0d6] px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="w-full font-lora text-xs text-[#333]/70"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="font-lora text-xs text-red-600 hover:underline"
        >
          Remove image
        </button>
      )}
    </div>
  )
}

function ImageListField({ value = [], onChange, label, max = 6 }) {
  const list = Array.isArray(value) ? value : []

  const updateAt = (index, url) => {
    const next = [...list]
    next[index] = url
    onChange(next.filter(Boolean))
  }

  const addSlot = () => {
    if (list.length >= max) return
    onChange([...list, ''])
  }

  const removeAt = (index) => {
    onChange(list.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-lora text-sm font-medium text-[#333]">{label}</span>
        <button
          type="button"
          onClick={addSlot}
          disabled={list.length >= max}
          className="font-lora text-xs text-nfci-red disabled:opacity-40"
        >
          + Add image
        </button>
      </div>
      {list.map((url, index) => (
        <div key={index} className="rounded-xl border border-[#e8e0d6] bg-[#FAF6F1]/50 p-3">
          <ImageField
            label={`Image ${index + 1}`}
            value={url}
            onChange={(v) => updateAt(index, v)}
          />
          <button
            type="button"
            onClick={() => removeAt(index)}
            className="mt-2 font-lora text-xs text-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      {list.length === 0 && (
        <p className="font-lora text-xs text-[#333]/50">No images — click Add image</p>
      )}
    </div>
  )
}

export default function BlockPropsForm({ componentId, props, onChange }) {
  const { fields, note } = getComponentSchema(componentId)

  const set = (key, value) => {
    onChange({ ...props, [key]: value })
  }

  if (!fields.length) {
    return (
      <p className="font-lora text-sm text-[#333]/60">
        {note || 'This section has no editable fields in the admin yet.'}
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {note && fields.length > 0 && (
        <p className="rounded-lg bg-[#FAF6F1] px-3 py-2 font-lora text-xs text-[#333]/60">
          {note}
        </p>
      )}
      {fields.map((field) => {
        const value = props?.[field.key]

        if (field.type === 'textarea') {
          return (
            <label key={field.key} className="block">
              <span className="font-lora text-sm font-medium text-[#333]">
                {field.label}
              </span>
              <textarea
                value={value ?? ''}
                onChange={(e) => set(field.key, e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
              />
            </label>
          )
        }

        if (field.type === 'image') {
          return (
            <ImageField
              key={field.key}
              label={field.label}
              value={value ?? ''}
              onChange={(v) => set(field.key, v)}
            />
          )
        }

        if (field.type === 'image-list') {
          return (
            <ImageListField
              key={field.key}
              label={field.label}
              value={value}
              max={field.max ?? 6}
              onChange={(v) => set(field.key, v)}
            />
          )
        }

        return (
          <label key={field.key} className="block">
            <span className="font-lora text-sm font-medium text-[#333]">
              {field.label}
            </span>
            <input
              type="text"
              value={value ?? ''}
              onChange={(e) => set(field.key, e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-3 py-2 font-lora text-sm outline-none focus:border-nfci-red"
            />
          </label>
        )
      })}
    </div>
  )
}
