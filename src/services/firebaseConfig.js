// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSWJiJRolygLTcnkzoadqePYLkl5zoZmw",
  authDomain: "elpotrero-eed30.firebaseapp.com",
  projectId: "elpotrero-eed30",
  storageBucket: "elpotrero-eed30.appspot.com",
  messagingSenderId: "913237749234",
  appId: "1:913237749234:web:503924b64886e5134b0f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)