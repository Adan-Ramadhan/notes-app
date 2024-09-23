import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import NotesApp from './pages/NotesApp'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesApp/>
  </React.StrictMode>,
)
