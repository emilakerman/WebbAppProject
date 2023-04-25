import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter as Router } from 'react-router-dom'
import MovieThumb from './components/MovieThumb'
import HomePage from './components/HomePage'
import MovieCard from './components/MovieCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       {/* <App /> */}
       {/* <HomePage /> */}
       <MovieCard />
    </Router>
  </React.StrictMode>,
)
