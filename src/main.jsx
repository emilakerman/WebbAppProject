import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter as Router } from 'react-router-dom'

import dotenv from "dotenv"



dotenv.config()
console.log(env)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
</React.StrictMode>
)