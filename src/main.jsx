import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TestPage from './pages/TestPage.jsx'

const router = createBrowserRouter([
  {
    path: '/trip-architect/',
    element: <HomePage />,
  },
  {
    path: '/trip-architect/test',
    element: <TestPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
