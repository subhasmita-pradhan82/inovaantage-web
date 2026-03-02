import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRounting from './routing/AppRouting.jsx'
import './mainComponent/styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRounting />
  </StrictMode>
)
