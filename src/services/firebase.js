// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsAcDAbccFtfZns0XZc22iEdqbXe0gKv0",
  authDomain: "buysmarter2.firebaseapp.com",
  projectId: "buysmarter2",
  storageBucket: "buysmarter2.appspot.com",
  messagingSenderId: "1041311981813",
  appId: "1:1041311981813:web:0f7e9e6fc3a6e24443e5bc",
  measurementId: "G-PKX0NNJK90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
