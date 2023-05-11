import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs, deleteDoc } from "firebase/firestore";

const Profile = () => {
  const db = getFirestore();
  const [rented, setRented] = useState([]); //previously rented movies from firestore?
  const [reviews, setReviews] = useState([
    "Review1: 8/10",
    "Review2: 4/10",
    "Review3: 2/10",
    "Review4: 1/10",
    "Review5: 10/10"
  ]); //reviews or maybe ratings of movies, also from firestore?

  useEffect(() => {
    const fetchShoppingCart = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const rentedMoviesRef = collection(userRef, "rentedMovies");
        const snapshot = await getDocs(rentedMoviesRef);
        const cartItems = snapshot.docs.map((doc) => doc.data());
        setRented(cartItems);
      }
    };

    fetchShoppingCart();
  }, [db]);

    const randomKey = () => {
        return Math.random().toString(36).substring(2, 9);
    }
    const uploadAndSetProfilePic = () => {
        /* the onclick handler to upload profile picture to firebase storage (if we decide to do this) */
    }
  return (
    <div className="profileOuterContainer">
      <div className="profileContainer">
        <div id="usernameAndImage">
          <img 
            id="profileImg"
            src="https://i.imgur.com/GZ0gah4.png" /*profile image from firebase storage?*/
            onClick={() => uploadAndSetProfilePic()}
          ></img>
          <h3>Username/email</h3> {/*Username or email from firebaseAUTH*/}
        </div>
        <div id="rentedLeftandReviewsRight">
        <div id="previouslyRented">
            <h4>Previously rented:</h4>
            {rented.map((movie) => (
                <div key={randomKey()}>{movie.title} </div>
            ))}
            </div>
        <div id="movieReviews">
            <h4>Movie reviews:</h4>
            {reviews.map((review) => (
                <div key={randomKey()}>{review}, </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
