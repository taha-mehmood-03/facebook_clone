import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDZ9IWvOmXKXE01Avx2vujXnhWckvHU1C4",
  authDomain: "react-fb-form-ebf41.firebaseapp.com",
  databaseURL: "https://react-fb-form-ebf41-default-rtdb.firebaseio.com",
  projectId: "react-fb-form-ebf41",
  storageBucket: "react-fb-form-ebf41.appspot.com",
  messagingSenderId: "780358251734",
  appId: "1:780358251734:web:2a294f8b725b9d001fc577",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const firestore = getFirestore(); // for storing text and url
const storage = getStorage();// for storing image

export { app, auth, firestore,storage,db};