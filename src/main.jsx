import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Components/Context/Context.jsx'


// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Add your Clerk Publishable Key to the .env.local file')
// }


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
  </React.StrictMode>
)
