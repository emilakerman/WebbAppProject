
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Private .env file for the secret keys
const firebaseConfig = {
  apiKey: "AIzaSyDTloBL3p_QgYBbvBNvw9gZyBsIoTIspj4",
  authDomain: "webbappproject.firebaseapp.com",
  projectId: "webbappproject",
  storageBucket: "webbappproject.appspot.com",
  messagingSenderId: "1017792719117",
  appId: "1:1017792719117:web:b845f27ebc815c5585e844"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app);