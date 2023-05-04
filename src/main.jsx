import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import './navbar.css'
import MovieThumb from './components/MovieThumb'
import HomePage from './components/HomePage'
import MovieCard from './components/MovieCard'
import ShoppingCart from './components/ShoppingCart'
import LogIn from './components/LogIn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <App />
       {/* <HomePage /> */}
       {/*  <MovieCard /> */}
       {/*  <ShoppingCart /> */}
    </Router>
</React.StrictMode>
)