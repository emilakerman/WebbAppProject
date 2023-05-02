
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>

          <Route path="/" element={<HomePage/>}></Route>
          <Route path="AboutUs" element={<AboutUsPage/>}></Route>

        </Routes>
      </div>
    </>
  )
}

export default App
