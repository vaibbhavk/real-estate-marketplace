import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm6KqZ2kT-pGWV6tHsEX7zNSkHtfLhPGE",
  authDomain: "house-marketplace-41ac5.firebaseapp.com",
  projectId: "house-marketplace-41ac5",
  storageBucket: "house-marketplace-41ac5.appspot.com",
  messagingSenderId: "447159717792",
  appId: "1:447159717792:web:f5b829e9001270f8939ec5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()