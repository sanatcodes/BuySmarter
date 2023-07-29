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
  apiKey: "AIzaSyBKGxB_suE1ANre6Yot3sQsMYBorazMOLY",
  authDomain: "buysmarter-b2558.firebaseapp.com",
  projectId: "buysmarter-b2558",
  storageBucket: "buysmarter-b2558.appspot.com",
  messagingSenderId: "311253872304",
  appId: "1:311253872304:web:1a2f3b463fb2e51c1c1575",
  measurementId: "G-VT1B33TGK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
