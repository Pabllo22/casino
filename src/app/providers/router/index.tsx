import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '../../layouts/AppLayout'
import HomePage from '../../../pages/home'
import OffersPage from '../../../pages/offers'
import NotFoundPage from '../../../pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'offers', element: <OffersPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function AppRouterProvider() {
  return <RouterProvider router={router} />
}


