// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export { app, auth };
