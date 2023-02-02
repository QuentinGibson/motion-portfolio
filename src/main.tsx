import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import Page from './Page'
import Error from './Error'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <Page><App/></Page>,
  errorElement: <Error/>
}, {
    path: '/about',
    element: <Page><About/></Page>
  }])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
