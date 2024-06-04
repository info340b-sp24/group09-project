// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh1VR8RtX6nQ9AUTLuia86jO5VOl-baxU",
  authDomain: "travelapp-40091.firebaseapp.com",
  databaseURL: "https://travelapp-40091-default-rtdb.firebaseio.com",
  projectId: "travelapp-40091",
  storageBucket: "travelapp-40091.appspot.com",
  messagingSenderId: "57614013698",
  appId: "1:57614013698:web:5d967b56b4cbbbccc1de1b",
  measurementId: "G-BYZLWBFP6G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
