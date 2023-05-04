import React, { useState } from "react";

const ShoppingCart = () => {
const [cartItems, setCartItems] = useState([
    //Exempel filmer/pris, dem riktiga läggs till senare.
        { title: "Movie 1 example", price: 4 },
        { title: "Movie 2 example", price: 3 },
        { title: "Movie 3 example", price: 6 }

]);

const removeMovie = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1)
    setCartItems(newCartItems);
};

const totalPrice = cartItems.reduce((total, movie) => total + movie.price, 0);
return (
    <div>
        <h2>Shopping Cart</h2>
        <h3>Your added movies</h3>
        <ul>
            {cartItems.map ((movie, index) => (
                <li key={index}>
                    {movie.title} - {movie.price} $
                    <button onClick={() => removeMovie(index)}>-</button>
                </li>
            ))}
        </ul>
        <button>Add more movies</button>
        <p>Total price: {totalPrice} $</p>
        <button>Go to checkout</button>
    </div>
)
}

export default ShoppingCart;