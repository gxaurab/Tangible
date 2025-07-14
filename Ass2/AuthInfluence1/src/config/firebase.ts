import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYqIizsefDInp0SKoUrCeADtqZia4HoXE",
  authDomain: "arbyte-ass1influence.firebaseapp.com",
  projectId: "arbyte-ass1influence",
  storageBucket: "arbyte-ass1influence.firebasestorage.app",
  messagingSenderId: "705776191119",
  appId: "1:705776191119:web:abe61deedfe3e22f5d52fa",
  measurementId: "G-WG5C52PTZQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)