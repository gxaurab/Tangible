import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider} from "react-router"

import './index.css'
import { routes } from './routes'
import { ThemeProvider } from './context/ThemeContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
