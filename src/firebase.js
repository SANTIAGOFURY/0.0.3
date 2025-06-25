import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUx-YhQlJqJ2e5RRklBpPsdM2RBaQH-Ek",
  authDomain: "zonojstore.firebaseapp.com",
  projectId: "zonojstore",
  storageBucket: "zonojstore.appspot.com",
  messagingSenderId: "192122918263",
  appId: "1:192122918263:web:9d094add2780d2f9b33d72",
  measurementId: "G-1TNCE10PWV",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, githubProvider };
