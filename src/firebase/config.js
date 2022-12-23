// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHu1X8dojgTutKIRpttD3etL-57zeaev8",
  authDomain: "aiudo-bank.firebaseapp.com",
  projectId: "aiudo-bank",
  storageBucket: "aiudo-bank.appspot.com",
  messagingSenderId: "944175254127",
  appId: "1:944175254127:web:259a08f8a968ad358fdb9a",
  measurementId: "G-CNY47F920N"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);