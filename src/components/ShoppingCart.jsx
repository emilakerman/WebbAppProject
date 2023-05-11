import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom"
import '.././shoppingcart.css'


const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        //Exempel filmer/pris, dem riktiga läggs till senare.
        { title: "Movie 1 example", price: 4 },
        { title: "Movie 2 example", price: 3 },
        { title: "Movie 3 example", price: 6 },
        { title: "Movie 4 example", price: 2 },
        { title: "Movie 5 example", price: 6 }
    ]);

    const removeMovie = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1)
        setCartItems(newCartItems);
    };

    const totalPrice = cartItems.reduce((total, movie) => total + movie.price, 0);

    const hasMoviesInCart = cartItems.length > 0;

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <div className="cart-info">
                {hasMoviesInCart ?
                <h3>Your added movies</h3>
                :
                <h3>You don't have any movies in your cart</h3>
}
                <ul>
                    {cartItems.map((movie, index) => (
                        <li key={index}>
                            {movie.title} - {movie.price} $
                            <button onClick={() => removeMovie(index)}>-</button>
                        </li>
                    ))}
                </ul>
                <Link to="/">
                <button className="add-movie-button">Add more movies</button>
                </Link>
                <p>Total price: {totalPrice} $</p>
                {hasMoviesInCart ?
                    <Link to="/Payment">
                        <button >Go to checkout</button>
                    </Link>
                    :
                    <button disabled>Go to checkout</button>
                }
            </div>
        </div>
    );
}

export default ShoppingCart;
