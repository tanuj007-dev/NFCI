import { Route, Routes } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import PageList from './pages/PageList'
import CreatePage from './pages/CreatePage'
import PageEditor from './pages/PageEditor'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="pages" element={<PageList />} />
        <Route path="pages/new" element={<CreatePage />} />
        <Route path="pages/:pageId" element={<PageEditor />} />
      </Route>
    </Routes>
  )
}
