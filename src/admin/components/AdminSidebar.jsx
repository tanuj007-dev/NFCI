import { NavLink } from 'react-router-dom'
import logoText from '../../assets/Logo Text.png'

const linkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-3 font-lora text-sm transition-colors whitespace-nowrap ${
    isActive
      ? 'bg-nfci-red text-white'
      : 'text-white/80 hover:bg-white/10 hover:text-white'
  }`

export default function AdminSidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#01101D] text-white shadow-xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="border-b border-white/10 px-5 py-6">
        <img
          src={logoText}
          alt="NFCI"
          className="h-10 w-auto brightness-0 invert"
        />
        <p className="mt-2 font-lora text-xs text-white/50">Content Admin</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
        <NavLink to="/admin" end className={linkClass} onClick={onClose}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/pages" className={linkClass} onClick={onClose}>
          All pages
        </NavLink>
        <NavLink to="/admin/pages/new" className={linkClass} onClick={onClose}>
          + Create page
        </NavLink>
      </nav>

      <div className="border-t border-white/10 p-4">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl border border-white/20 px-4 py-2.5 text-center font-lora text-sm text-white/90 hover:border-nfci-red hover:text-white"
        >
          View website
        </a>
      </div>
    </aside>
  )
}
