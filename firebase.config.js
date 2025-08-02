// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcELyDtyO-vyYre3myYOwrsZQ0PGZbHCo",
  authDomain: "sesion-3-acc67.firebaseapp.com",
  projectId: "sesion-3-acc67",
  storageBucket: "sesion-3-acc67.firebasestorage.app",
  messagingSenderId: "520339979895",
  appId: "1:520339979895:web:946510a6a0fdcc9f40d072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);