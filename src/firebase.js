import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3I5Jyr7UHFmMr3o0PwH6ZgZdRaNwpHIY",
  authDomain: "heartdod-5ec33.firebaseapp.com",
  projectId: "heartdod-5ec33",
  storageBucket: "heartdod-5ec33.firebasestorage.app",
  messagingSenderId: "730848300919",
  appId: "1:730848300919:web:3f103b1f7633541cbb9b72",
  measurementId: "G-71P9D43BJ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();