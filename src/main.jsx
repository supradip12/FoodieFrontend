import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './common/routers.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </React.StrictMode>,
)
