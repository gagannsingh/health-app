// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOM2LVjxqF3hHxSqZ-hCxo67P8khUG5Ss",
  authDomain: "healthappfirebase-72122.firebaseapp.com",
  projectId: "healthappfirebase-72122",
  storageBucket: "healthappfirebase-72122.appspot.com",
  messagingSenderId: "1066864649129",
  appId: "1:1066864649129:web:d7e741b26726c4ac85dab8",
  measurementId: "G-82D0JQRMEH"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);