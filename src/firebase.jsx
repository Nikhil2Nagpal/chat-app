// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCRvD4MWIdXwY3CE0w57-yJXqF0Ek6Y9Co",
  authDomain: "react-firebase-chat-app-4c160.firebaseapp.com",
  projectId: "react-firebase-chat-app-4c160",
  storageBucket: "react-firebase-chat-app-4c160.appspot.com",
  messagingSenderId: "951339251601",
  appId: "1:951339251601:web:905aa41f65add417ad0c30",
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);