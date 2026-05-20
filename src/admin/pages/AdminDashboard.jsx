import { Link } from 'react-router-dom'
import { listPages } from '../storage/pageStorage'
import { ALL_COMPONENT_IDS } from '../../cms/componentIds'
import AdminButton from '../components/AdminButton'

export default function AdminDashboard() {
  const pages = listPages()

  return (
    <div>
      <h1 className="font-new-york text-4xl text-[#333]">Dashboard</h1>
      <p className="mt-2 max-w-2xl font-lora text-[#333]/70">
        Build and reorder pages from your 49 registered sections. Changes are
        stored in this browser only until you connect a backend.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6">
          <p className="font-lora text-sm text-[#333]/50">Pages</p>
          <p className="mt-1 font-new-york text-4xl text-nfci-red">{pages.length}</p>
        </div>
        <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6">
          <p className="font-lora text-sm text-[#333]/50">Components</p>
          <p className="mt-1 font-new-york text-4xl text-nfci-red">
            {ALL_COMPONENT_IDS.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6">
          <p className="font-lora text-sm text-[#333]/50">Auth</p>
          <p className="mt-1 font-new-york text-2xl text-[#333]">None (dev)</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/admin/pages/new">
          <AdminButton>Create new page</AdminButton>
        </Link>
        <Link to="/admin/pages">
          <AdminButton variant="secondary">Manage pages</AdminButton>
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="font-new-york text-2xl text-[#333]">Recent pages</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white">
          <table className="w-full text-left font-lora text-sm">
            <thead className="bg-[#FAF6F1] text-[#333]/60">
              <tr>
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="px-5 py-3 font-medium">Slug</th>
                <th className="px-5 py-3 font-medium">Sections</th>
                <th className="px-5 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-t border-[#e8e0d6]">
                  <td className="px-5 py-4 font-medium text-[#333]">
                    {page.title}
                    {page.builtin && (
                      <span className="ml-2 rounded-full bg-nfci-red/10 px-2 py-0.5 text-xs text-nfci-red">
                        built-in
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-[#333]/70">{page.slug}</td>
                  <td className="px-5 py-4">{page.blockCount}</td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/admin/pages/${page.id}`}
                      className="text-nfci-red hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
