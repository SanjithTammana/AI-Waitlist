// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ai-researchwaitlist.firebaseapp.com",
  projectId: "ai-researchwaitlist",
  storageBucket: "ai-researchwaitlist.appspot.com",
  messagingSenderId: "308379690330",
  appId: "1:308379690330:web:0895ac0958e6d7f89e7f63",
  measurementId: "G-RV0Y724PRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
