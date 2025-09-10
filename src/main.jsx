import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FirebaseProvider } from './context/Firebase.jsx'
import { GlobalProvider } from './context/Global.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GlobalProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </GlobalProvider>
  </StrictMode>,
)
