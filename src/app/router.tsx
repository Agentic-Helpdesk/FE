import {createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import TicketListPage from '../pages/TicketListPage'
import TicketDetailPage from '../pages/TicketDetailPage'
import TicketInputPage from '../pages/TicketInputPage'
import LoginPage from '../pages/LoginPage'
import JoinPage from '../pages/JoinPage'

const router = createBrowserRouter([
    {path: '/', element: <LandingPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/join', element: <JoinPage/>},
    {
        element: <Layout/>,
        children: [
            {path: '/dashboard', element: <DashboardPage/>},
            {path: '/tickets', element: <TicketListPage/>},
            {path: '/tickets/new', element: <TicketInputPage/>},
            {path: '/tickets/:id', element: <TicketDetailPage/>},
        ],
    },
])

export default router
