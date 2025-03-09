import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getHighlighter } from 'shiki'
import App from './App.tsx'
import './index.css'

// Initialize Shiki with required languages
async function initApp() {
  try {
    // Pre-load languages to avoid runtime errors
    const highlighter = await getHighlighter({
      themes: ['github-dark'],
      langs: ['javascript', 'typescript', 'python', 'html', 'css', 'json'],
    })
    
    // Make highlighter available globally if needed
    window.shikiHighlighter = highlighter
    
    // Render the app
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } catch (error) {
    console.error('Failed to initialize Shiki:', error)
    // Fallback rendering without Shiki initialization
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}

// Start the application
initApp()
