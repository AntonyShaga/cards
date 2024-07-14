import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignIn } from '@/auth/sign-in'
import { DetailCard } from '@/components/ui/detailCard'
import { Layout } from '@/pages/layout/layout'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignIn />,
        path: '/',
      },
    ],
    element: <Layout />,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DetailCard name={'Try egen'} />,
    path: '/detailCard',
  },
]
const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}
