
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom"

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

  const removeMovie = async (movieTitle) => {
    try {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const rentedMoviesRef = collection(userRef, "rentedMovies");
        const querySnapshot = await getDocs(rentedMoviesRef);

        querySnapshot.forEach((doc) => {
          const movieData = doc.data();
          if (movieData.title === movieTitle) {
            deleteDoc(doc.ref);
            console.log("Movie deleted!");
          }
        });

        const updatedSnapshot = await getDocs(rentedMoviesRef);
        const updatedCartItems = updatedSnapshot.docs.map((doc) => doc.data());
        setShoppingCart(updatedCartItems);
      }
    } catch (error) {
      console.error("Error removing movie:", error);
    }
  };

  const totalPrice = 0;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {shoppingCart.length === 0 ? (
        <p>Your cart is empty. <br/>
          <button>
            <Link to="/">Rent more movies</Link>
          </button>
        </p>
        
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

          <button>
          <Link to="/">Rent more movies</Link>
          </button>
          
          <p>Total price: {totalPrice} $</p>
          <button>Go to checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
