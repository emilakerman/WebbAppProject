
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import './App.css';
import MovieCard from './components/MovieCard';
import LogIn from './components/LogIn';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';
import StreamMoviePage from './components/StreamMoviePage';
import 'dotenv/config'


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieCard />}></Route>
          <Route path="/AboutUsPage" element={<AboutUsPage />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path='/StreamMoviePage' element={<StreamMoviePage />}></Route>
        </Routes>
      </div>
    </>
  );

}



export default App
