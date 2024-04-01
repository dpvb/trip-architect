import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PEPage from './pages/PEPage.jsx'
import REPage from './pages/REPage.jsx'
import IOPage from './pages/IOPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/prompt-engineering" element={<PEPage/>}/>
        <Route path="/response-evaluation" element={<REPage/>}/>
        <Route path="/itinerary-optimization" element={<IOPage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
