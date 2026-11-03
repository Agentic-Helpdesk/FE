import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import TicketListPage from '../pages/TicketListPage'
import TicketDetailPage from '../pages/TicketDetailPage'
import LoginPage from '../pages/LoginPage'

const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  { path: '/tickets', element: <TicketListPage /> },
  { path: '/tickets/:id', element: <TicketDetailPage /> },
  { path: '/login', element: <LoginPage /> },
])

export default router
