import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import AdminRoutes from './admin/AdminRoutes'
import PublicRoutes from './PublicRoutes'

function AppContent() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  if (isAdmin) {
    return <AdminRoutes />
  }

  return <PublicRoutes />
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
