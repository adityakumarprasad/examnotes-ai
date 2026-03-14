// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "notesai-6380d.firebaseapp.com",
  projectId: "notesai-6380d",
  storageBucket: "notesai-6380d.firebasestorage.app",
  messagingSenderId: "822815780546",
  appId: "1:822815780546:web:eb6fd9a6d8eb2c5773955b",
  measurementId: "G-YXJJ9NLNLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}