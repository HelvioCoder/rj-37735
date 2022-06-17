// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrTih6hsSSfidIS9fTdTZ97rNvprbKn0M",
  authDomain: "proyecto37735.firebaseapp.com",
  projectId: "proyecto37735",
  storageBucket: "proyecto37735.appspot.com",
  messagingSenderId: "27596835479",
  appId: "1:27596835479:web:79f8fbbddd2404bf59b7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)