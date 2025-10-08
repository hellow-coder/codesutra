import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { LoaderProvider } from './Context/LoaderContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import "../src/Styles/Style.css"
createRoot(document.getElementById('root')).render(

 <ThemeProvider>
    <LoaderProvider>
            <Toaster />
    <App />
    </LoaderProvider>
    </ThemeProvider>

   
 
)
