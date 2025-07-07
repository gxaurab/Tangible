
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuhGMOKK6HoGcATZ_VrbeLMZjNbve9jMo",
  authDomain: "arbyte-auth-assignment.firebaseapp.com",
  projectId: "arbyte-auth-assignment",
  storageBucket: "arbyte-auth-assignment.firebasestorage.app",
  messagingSenderId: "912977569698",
  appId: "1:912977569698:web:51312ad2f1b69a3c3634fb",
  measurementId: "G-EVV8NVP5TP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

