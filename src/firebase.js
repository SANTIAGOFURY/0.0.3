// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUx-YhQlJqJ2e5RRklBpPsdM2RBaQH-Ek",
  authDomain: "zonojstore.firebaseapp.com",
  projectId: "zonojstore",
  storageBucket: "zonojstore.appspot.com",
  messagingSenderId: "192122918263",
  appId: "1:192122918263:web:9d094add2780d2f9b33d72",
  measurementId: "G-1TNCE10PWV", // Only relevant if using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Set local persistence for auth (user stays logged in after refresh)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting auth persistence:", error);
});

// Initialize auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Export Firebase instances
export { auth, db, googleProvider, githubProvider };
