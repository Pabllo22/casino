import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouterProvider from './app/providers/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>,
)
