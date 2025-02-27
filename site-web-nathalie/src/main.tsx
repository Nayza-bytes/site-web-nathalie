import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './sections/Navbar'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
