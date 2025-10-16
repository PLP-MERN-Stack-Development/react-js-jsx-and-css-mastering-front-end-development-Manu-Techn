import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx' // Ensure ThemeProvider is imported

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
    <App />
    </ThemeProvider>
  </StrictMode>,
)
