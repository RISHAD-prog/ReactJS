import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'
import AuthProvider from './components/Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-40' >
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>

)
