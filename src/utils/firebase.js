// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4DLBTCN3ptLAuPARS8GMJXz-iempD6_4",
  authDomain: "netflixgpt-7e0b3.firebaseapp.com",
  projectId: "netflixgpt-7e0b3",
  storageBucket: "netflixgpt-7e0b3.firebasestorage.app",
  messagingSenderId: "46625195999",
  appId: "1:46625195999:web:e51d403ca2bf557806a66a",
  measurementId: "G-5EE4JXC83G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();