import '../src/components/index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "./components/HomePage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
