import { useState } from "react";
/* test comment * test est*/ 

const Profile = () => {
    const randomKey = () => {
        return Math.random().toString(36).substring(2, 9);
    }
    const uploadAndSetProfilePic = () => {
        /* the onclick handler to upload profile picture to firebase storage (if we decide to do this) */
    }
  const [rented, setRented] = useState([
    "Movie1",
    "Movie2",
    "Movie3",
    "Movie4",
    "Movie5",
    "Movie6",
  ]); //previously rented movies from firestore?
  const [reviews, setReviews] = useState([
    "Review1: 8/10",
    "Review2: 4/10",
    "Review3: 2/10",
    "Review4: 1/10",
    "Review5: 10/10"
  ]); //reviews or maybe ratings of movies, also from firestore?
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
                <div key={randomKey()}>{movie}, </div>
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
