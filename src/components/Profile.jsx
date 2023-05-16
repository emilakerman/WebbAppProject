import { useState, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { storage } from ".././firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const Profile = () => {
  const db = getFirestore();
  const [rented, setRented] = useState([]); //previously rented movies from firestore
  const [reviews, setReviews] = useState([]); //reviews or maybe ratings of movies, also from firestore

  /* profile image */
  const inputFile = useRef(null) ;
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchShoppingCart = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const shoppingCartRef = collection(userRef, "rentedMovies");
        const snapshot = await getDocs(shoppingCartRef);
        const cartItems = snapshot.docs.map((doc) => doc.data());
        setRented(cartItems);
        /* ratings below*/
        const ratingsRef = collection(userRef, "ratings");
        const snapshotRatings = await getDocs(ratingsRef);
        const ratingsArray = snapshotRatings.docs.map((doc) => doc.data());
        setReviews(ratingsArray);
      }
    };
    fetchShoppingCart();
  }, [db]);

  useEffect(() => {
    handleSubmit();
  },[image]);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      const imageRef = ref(storage, `users/${user.uid}/profileImage`);
      getDownloadURL(imageRef)
        .then((url) => {
          setUrl(url);
        })
        .catch((error) => {
          console.log(error.message, "error getting the image url");
        });
    }
  }, [storage]);
  
    const randomKey = () => {
        return Math.random().toString(36).substring(2, 9);
    }
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    }; 
    const onButtonClick = () => {
      inputFile.current.click();
    };
    const handleSubmit = () => {
      if (image) {
        const metadata = {
          contentType: 'image/jpeg, image/png'
        };
        const imageRef = ref(storage, `users/${user.uid}/profileImage`);
        uploadBytes(imageRef, image, metadata)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                setUrl(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            // setImage(url);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      else if (!image) {
        console.log(image)
      }
    };
    
  const user = getAuth().currentUser;
  return (
    <div className="profileOuterContainer">
      <div className="profileContainer">
        <div id="usernameAndImage">
        <input type='file' ref={inputFile} onChange={handleImageChange} style={{display: 'none'}}/>
          <img 
            id="profileImg"
            src={url} /*profile image from firebase storage*/
            onClick={() => onButtonClick()}
          ></img>
          <h3>{user.email}</h3> {/*Username or email from firebaseAUTH*/}
        </div>
        <div id="rentedLeftandReviewsRight">
        <div id="previouslyRented">
            <h4>Previously rented:</h4>
            {rented.map((movie) => (
                <div key={randomKey()}>{movie.title} </div>
            ))}
            </div>
        <div id="movieReviews">
            <h4>Movie ratings:</h4>
            {reviews.map((movie) => (
                <div key={randomKey()}>{movie.rating}/5, {movie.title} </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
