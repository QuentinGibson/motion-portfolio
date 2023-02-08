import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page'
import Error from './Error'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import 'normalize.css'

const router = createBrowserRouter([{
  path: '/',
  element: <Page><HomePage /></Page>,
  errorElement: <Error />
}, {
  path: '/about',
  element: <Page><AboutPage /></Page>
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
