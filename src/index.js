import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import MyApp from './App'
import reportWebVitals from './reportWebVitals'
import './styles/reset.css'
import './styles/app.css'
import './styles/price.css'
import { AppProvider } from './context/app'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <AppProvider>
      <MyApp />
    </AppProvider>
  </Router>
)

reportWebVitals()
