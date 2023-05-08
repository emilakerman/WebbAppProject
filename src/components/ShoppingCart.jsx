import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs } from "firebase/firestore";

const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchShoppingCart = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const rentedMoviesRef = collection(userRef, "rentedMovies");
        const snapshot = await getDocs(rentedMoviesRef);
        const cartItems = snapshot.docs.map((doc) => doc.data());
        setShoppingCart(cartItems);
      }
    };

    fetchShoppingCart();
  }, [db]);

  const removeMovie = (movieId) => {
    console.log(movieId);
    const updatedCartItems = shoppingCart.filter((item) => item.id !== movieId);
    setShoppingCart(updatedCartItems);
  };

  const totalPrice = shoppingCart.reduce((total, movie) => total + movie.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {shoppingCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Your added movies</h3>
          <ul>
            {shoppingCart.map((movie) => (
              <li key={movie.id}>
                {movie.title} - {movie.price} $
                <button onClick={() => removeMovie(movie.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button>Add more movies</button>
          <p>Total price: {totalPrice} $</p>
          <button>Go to checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
