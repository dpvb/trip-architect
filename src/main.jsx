import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/trip-architect/',
    element: <HomePage />,
  },
  {
    path: '/trip-architect/itinerary-optimization',
    element: <h1>Itinerary Optimization</h1>
  },
  {
    path: '/trip-architect/prompt-engineering',
    element: <h1>Prompt Engineering</h1>
  },
  {
    path: '/trip-architect/response-evaluation',
    element: <h1>Response Evaluation</h1>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
