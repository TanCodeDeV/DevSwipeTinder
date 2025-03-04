// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJAqjWa7-eIGuLlX_DO6zKy_x3-ttBmSs",
  authDomain: "login-auth-5dea6.firebaseapp.com",
  projectId: "login-auth-5dea6",
  storageBucket: "login-auth-5dea6.firebasestorage.app",
  messagingSenderId: "838066311753",
  appId: "1:838066311753:web:5866de15d773c8fdb5e598",
  measurementId: "G-RT02RSJQB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
