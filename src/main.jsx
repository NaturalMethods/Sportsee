import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/dashboard" element={<dashboard />} />
              <Route path="/profile" element={<profile />} />
              <Route path="*" element={<h1>Error</h1>} />
          </Routes>
      </Router>
  </StrictMode>,
)
