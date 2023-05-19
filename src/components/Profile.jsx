import { useState, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { storage } from ".././firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import RentalsAndReviews from "./RentalsAndReviews";


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

        setReviews(removeDuplicateWithMinTimestamp(ratingsArray));
      }
    };
    fetchShoppingCart();
  }, [db]);
  //removes duplicate reviews by only keeping the one with the latest timestamp
  function removeDuplicateWithMinTimestamp(array) {
    const titleCount = {};
    const timestampMap = {};
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const title = item.title;
      const timestamp = item.timestamp;
  
      if (titleCount[title]) {
        if (timestamp > timestampMap[title]) {
          timestampMap[title] = timestamp;
          array[titleCount[title] - 1] = null;
          titleCount[title] = i + 1;
        } else {
          array[i] = null;
        }
      } else {
        // First occurrence of the title
        titleCount[title] = i + 1;
        timestampMap[title] = timestamp;
      }
    }
    return array.filter(Boolean);
  }
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
        // console.log(image)
      }
    };
  let previousRentalsComponent = null;
  if (rented.length !== 0) {
    previousRentalsComponent = (
      <RentalsAndReviews title="Previously rented" list={rented}/>
    )
  }
  let ratingsComponent = null;
  if (reviews.length !== 0) {
    ratingsComponent = (
      <RentalsAndReviews title="Personal Ratings" list={reviews} ratingDivider=" - " ratingOutOfFive="/5"/>
    )
  }
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
        <div className="listsContainer">
          {previousRentalsComponent}
          {ratingsComponent}
        </div>
      </div>
    </div>
  );
};
export default Profile;
