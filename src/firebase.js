import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore"; // ✅ Add this

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBUx-YhQlJqJ2e5RRklBpPsdM2RBaQH-Ek",
  authDomain: "zonojstore.firebaseapp.com",
  projectId: "zonojstore",
  storageBucket: "zonojstore.firebasestorage.app",
  messagingSenderId: "192122918263",
  appId: "1:192122918263:web:9d094add2780d2f9b33d72",
  measurementId: "G-1TNCE10PWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore

// Set persistence to local (keeps user signed in across tabs and sessions)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// ✅ Export everything needed
export { auth, db, googleProvider, githubProvider };
