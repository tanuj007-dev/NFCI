import { Link } from 'react-router-dom'
import { listPages, deletePage } from '../storage/pageStorage'
import AdminButton from '../components/AdminButton'

export default function PageList() {
  const pages = listPages()

  const handleDelete = (pageId, title) => {
    if (!window.confirm(`Delete page "${title}"? This cannot be undone.`)) return
    deletePage(pageId)
    window.location.reload()
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-new-york text-4xl text-[#333]">Pages</h1>
          <p className="mt-2 font-lora text-[#333]/70">
            Dynamic pages built from CMS blocks
          </p>
        </div>
        <Link to="/admin/pages/new">
          <AdminButton>+ New page</AdminButton>
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {pages.map((page) => (
          <article
            key={page.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e8e0d6] bg-white p-6"
          >
            <div>
              <h2 className="font-new-york text-xl text-[#333]">{page.title}</h2>
              <p className="mt-1 font-lora text-sm text-[#333]/60">
                <span className="font-mono text-nfci-red">{page.id}</span>
                {' · '}
                {page.slug}
                {' · '}
                {page.blockCount} sections
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={`/preview/${page.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <AdminButton variant="secondary">Preview</AdminButton>
              </a>
              <Link to={`/admin/pages/${page.id}`}>
                <AdminButton>Edit</AdminButton>
              </Link>
              {!page.builtin && (
                <AdminButton
                  variant="danger"
                  onClick={() => handleDelete(page.id, page.title)}
                >
                  Delete
                </AdminButton>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
