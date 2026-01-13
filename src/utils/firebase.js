// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXmupkq8AARAJiLtPg42U31NFLu2TQZS0",
  authDomain: "mess-d2816.firebaseapp.com",
  projectId: "mess-d2816",
  storageBucket: "mess-d2816.firebasestorage.app",
  messagingSenderId: "980090902908",
  appId: "1:980090902908:web:5b5fb5431d1ccc1644acf9",
  measurementId: "G-1HZRFWWB07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);