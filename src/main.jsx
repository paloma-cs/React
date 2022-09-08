import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/Global.css';

import { Home } from './Pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
