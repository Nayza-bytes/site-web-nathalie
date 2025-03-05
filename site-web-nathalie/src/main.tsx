import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './sections/Navbar'
import LandingSection from './sections/LandingSection'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <LandingSection />
  </StrictMode>
)
