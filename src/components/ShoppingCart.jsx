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
        console.log(cartItems);
        setShoppingCart(cartItems);
      }
    };

    fetchShoppingCart();
  }, [db]);

  const removeMovie = async (movie) => {
    //todo: Remove movie

  };

  //todo- movie price/total price
  const totalPrice = 0

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
                {movie.title} - $
                <button onClick={() => removeMovie(movie.title)}>Remove</button>
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
