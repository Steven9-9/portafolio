import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import WelcomeScreen from './components/WelcomeScreen'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WelcomeScreen />
    <App />
  </StrictMode>,
)
