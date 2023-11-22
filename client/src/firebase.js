// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-68849.firebaseapp.com",
  projectId: "mern-estate-68849",
  storageBucket: "mern-estate-68849.appspot.com",
  messagingSenderId: "718181193473",
  appId: "1:718181193473:web:7f056e931beef5407f2d00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);