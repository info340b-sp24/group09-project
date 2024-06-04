// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvKHtZbfGUTVzPqE4Kfw2MOV5yLE2fYcw",
  authDomain: "travelapp-ac7f6.firebaseapp.com",
  projectId: "travelapp-ac7f6",
  storageBucket: "travelapp-ac7f6.appspot.com",
  messagingSenderId: "593450004679",
  appId: "1:593450004679:web:65dd2e6313479e03e50ee2",
  measurementId: "G-3SPY09DWP0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
