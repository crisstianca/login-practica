// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKX5L8Vk5qqlkg4htplnbrXIlx16Or2fM",
  authDomain: "login-practica-46a9e.firebaseapp.com",
  projectId: "login-practica-46a9e",
  storageBucket: "login-practica-46a9e.appspot.com",
  messagingSenderId: "1089467763118",
  appId: "1:1089467763118:web:ac23d72224e47fe4e3203f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
// Initialize Firestore like Database
export const FirebaseDB = getFirestore( FirebaseApp )