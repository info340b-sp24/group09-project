// src/testAuth.js
import { auth, createUserWithEmailAndPassword } from './firebase';

const testEmail = "test@example.com";
const testPassword = "testPassword123";

createUserWithEmailAndPassword(auth, testEmail, testPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User created successfully:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating user:", errorCode, errorMessage);
  });
