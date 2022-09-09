// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkAABlwyPuVLOM0R_qq9rxWy8-qVOZ3Yc",
  authDomain: "portfolio-a47f4.firebaseapp.com",
  projectId: "portfolio-a47f4",
  storageBucket: "portfolio-a47f4.appspot.com",
  messagingSenderId: "258801155085",
  appId: "1:258801155085:web:e63ee875e9f9c9ad422944",
  measurementId: "G-4KPQL9F8TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
