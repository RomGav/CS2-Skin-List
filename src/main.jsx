import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import {WeaponProvider} from './components/WeaponContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeaponProvider>
      <RouterProvider router={router} />
    </WeaponProvider>
  </StrictMode>,
)
