import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { RouterProvider } from 'react-router'
import { router } from './router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
=======
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
>>>>>>> 29b8f090a0e7b9484d388018970e983d213e18a3
  </StrictMode>,
)
