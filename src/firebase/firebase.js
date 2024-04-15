
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"
import dotEnv from 'dotenv'



const firebaseConfig = {
  apiKey: dotEnv.process.REACT_APP_APIKEY,
  authDomain: dotEnv.REACT_APP_AUTHDOMAIN,
  projectId: dotEnv.REACT_APP_PROJECTID,
  storageBucket: dotEnv.REACT_APP_STORAGEBUCKET,
  messagingSenderId: dotEnv.REACT_APP_MESSAGESENDERID,
  appId: dotEnv.REACT_APP_APPID
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app);