import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider} from "react-router"

import './index.css'
import { routes } from './routes'
import { ThemeProvider } from './context/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ReactQueryDevtools buttonPosition='top-right'/>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)


