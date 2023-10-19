// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAl22q8AxqTlKjBk1FplOcZtmwfNFnKso",
  authDomain: "car-shop-32d82.firebaseapp.com",
  projectId: "car-shop-32d82",
  storageBucket: "car-shop-32d82.appspot.com",
  messagingSenderId: "388476313502",
  appId: "1:388476313502:web:32c9d775522e804758c08f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;