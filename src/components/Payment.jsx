import React, { useState, useEffect } from 'react';
import '.././payment.css'
import { Link } from 'react-router-dom';
import { getFirestore, doc, collection, getDocs, addDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const [shoppingCart, setShoppingCart] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchShoppingCart = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const shoppingCartRef = collection(userRef, "shoppingCart");
        const snapshot = await getDocs(shoppingCartRef);
        const cartItems = snapshot.docs.map((doc) => doc.data());
        setShoppingCart(cartItems);
      }
    };

    fetchShoppingCart();
  }, [db]);

  const addMoviesToBought = async () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var currentTime = hours + ":" + minutes + ":" + seconds;

    const user = getAuth().currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const rentedMoviesRef = collection(userRef, "RentedMovies");
      const shoppingCartRef = collection(userRef, "shoppingCart")
  
      // Get the movies from the shopping cart and set a timeStamp to when each movie was rented
      const moviesToAdd = shoppingCart.map((movie) => ({
        title: movie.title,
        time: currentTime

      }));
  
      // Add the movies to the rented movies collection
      try {
        await Promise.all(moviesToAdd.map((movie) => addDoc(rentedMoviesRef, movie)));
        console.log("Movies added to the rented movies collection.");
        // Clear the shopping cart after success
        setShoppingCart([]);
        const snapshot = await getDocs(shoppingCartRef);
        snapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
  

        console.log("Firebase ShoppingCart cleared")
        
      } catch (error) {
        console.error("Error adding movies to the rented movies collection:", error);
      }
    }
  };
  


  const handleCardNumberChange = (event) => {
    const input = event.target.value
      .replace(/\D/g, '') 
      .substring(0, 16) 
      .match(/.{1,4}/g) 
      .join(' '); 
    setCardNumber(input);
  };
  

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
  };

  const handleCvcChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').substring(0, 3);
    setCvc(input);
  };

  const handleCardholderNameChange = (event) => {
    const input = event.target.value.replace(/\d/g, '');
    setCardholderName(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle payment submission logic here
  };

  

  return (
    <div >
    <div className="payment-form">
    <form onSubmit={handleSubmit}>
      <label className='cardNumberLabel' htmlFor="cardNumber">Card Number:</label>
      <input className='cardNumber'
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Enter card number"
        maxLength="19"
        required
      />

      <label className='expirationDateLabel' htmlFor="expirationMonth">Expiration Date:</label>
      <div className='expirationDate'>
        <select
          id="expirationMonth"
          name="expirationMonth"
          value={expirationMonth}
          onChange={handleExpirationMonthChange}
          required
        >
          <option value="">Month</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select
          id="expirationYear"
          name="expirationYear"
          value={expirationYear}
          onChange={handleExpirationYearChange}
          required
        >
          <option value="">Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2027">2028</option>
          <option value="2027">2029</option>
          <option value="2027">2030</option>
        </select>
      </div>

      <label className='cvcLabel' htmlFor="cvc">CVC:</label>
      <input className='cvc'
        type="text"
        id="cvc"
        name="cvc"
        value={cvc}
        onChange={handleCvcChange}
        placeholder="Enter CVC"
        maxLength="3"
        required
      />

      <label className='cardHolderNameLabel'htmlFor="cardholderName">Cardholder Name:</label>
      <input className='cardHolderName'
    type="text"
    id="cardholderName"
    name="cardholderName"
    value={cardholderName}
    onChange={handleCardholderNameChange}
    placeholder="Enter cardholder name"
    maxLength="50"
    required
    pattern="^[^0-9]+$"
  />

<Link to={'/StreamMoviePage'}>
  <button className='payButton' type="submit" onClick={addMoviesToBought}>Pay Now</button>
</Link>

</form>
</div>
</div>
);
};

export default Payment;