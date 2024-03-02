import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTBucgIkUGTUkETQeWe0odGcAuUFHIrUo",
  authDomain: "doral-lenses.firebaseapp.com",
  projectId: "doral-lenses",
  storageBucket: "doral-lenses.appspot.com",
  messagingSenderId: "45586406260",
  appId: "1:45586406260:web:f7355c0fdf753c0458aa21",
  measurementId: "G-JDE6V8KXF8"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);