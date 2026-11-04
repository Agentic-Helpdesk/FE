import {createBrowserRouter} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import TicketListPage from '../pages/TicketListPage'
import TicketDetailPage from '../pages/TicketDetailPage'
import LoginPage from '../pages/LoginPage'
import JoinPage from "../pages/JoinPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <LandingPage/>},
    {path: '/dashboard', element: <DashboardPage/>},
    {path: '/tickets', element: <TicketListPage/>},
    {path: '/tickets/:id', element: <TicketDetailPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/join', element: <JoinPage/>},
])

export default router
