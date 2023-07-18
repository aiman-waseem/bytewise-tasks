// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDezp7hEiWX0cIefK6SjGrfqUrCmnjnPqk",
  authDomain: "fir-app-2b0ec.firebaseapp.com",
  projectId: "fir-app-2b0ec",
  storageBucket: "fir-app-2b0ec.appspot.com",
  messagingSenderId: "1029073051290",
  appId: "1:1029073051290:web:2bc85b52b8b4cd0f5a8923",
  measurementId: "G-W4ZMYDQGKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app)
 export const googleProvider = new GoogleAuthProvider()
 export const db = getFirestore(app)
 export const storage = getStorage(app);
 