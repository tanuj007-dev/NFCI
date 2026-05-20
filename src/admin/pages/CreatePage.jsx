import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPage } from '../storage/pageStorage'
import AdminButton from '../components/AdminButton'

export default function CreatePage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [pageId, setPageId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    try {
      const id = createPage({
        id: pageId || title,
        title: title.trim(),
        slug: slug.trim() || `/${(pageId || title).toLowerCase().replace(/\s+/g, '-')}`,
      })
      navigate(`/admin/pages/${id}`)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="max-w-xl">
      <h1 className="font-new-york text-4xl text-[#333]">Create page</h1>
      <p className="mt-2 font-lora text-[#333]/70">
        Add a new dynamic page, then compose it from sections.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-2xl border border-[#e8e0d6] bg-white p-6"
      >
        <label className="block">
          <span className="font-lora text-sm font-medium text-[#333]">
            Page title
          </span>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-4 py-2.5 font-lora outline-none focus:border-nfci-red"
            placeholder="e.g. Franchise"
          />
        </label>

        <label className="block">
          <span className="font-lora text-sm font-medium text-[#333]">
            Page id (optional)
          </span>
          <input
            value={pageId}
            onChange={(e) => setPageId(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-4 py-2.5 font-mono text-sm outline-none focus:border-nfci-red"
            placeholder="auto from title if empty"
          />
        </label>

        <label className="block">
          <span className="font-lora text-sm font-medium text-[#333]">URL slug</span>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[#e8e0d6] px-4 py-2.5 font-lora outline-none focus:border-nfci-red"
            placeholder="/franchise"
          />
        </label>

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-2 font-lora text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="flex gap-3 pt-2">
          <AdminButton type="submit">Create & edit sections</AdminButton>
          <AdminButton
            type="button"
            variant="secondary"
            onClick={() => navigate('/admin/pages')}
          >
            Cancel
          </AdminButton>
        </div>
      </form>
    </div>
  )
}
