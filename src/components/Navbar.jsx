import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
          Big Buster Movie Renthouse
      </Link>
      <ul>
        <li>
           <Link to="/ShoppingCart">Shopping Cart</Link>
        </li>
        <li>
           <Link to="/AboutUsPage">About us</Link>
        </li>
        <li>
           <Link to="/LogIn">Account</Link>
        </li>
      </ul>
    </nav>
  )
}