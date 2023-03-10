// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "messenger-85822.firebaseapp.com",
  projectId: "messenger-85822",
  storageBucket: "messenger-85822.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const realTimeDatabase = getDatabase(firebase);