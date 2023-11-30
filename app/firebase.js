// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.YOUR_apiKey,
  authDomain: process.env.YOUR_authDomain,
  projectId: process.env.YOUR_projectId,
  storageBucket: process.env.YOUR_storageBucket,
  messagingSenderId: process.env.YOUR_messagingSenderId,
  appId: process.env.YOUR_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
