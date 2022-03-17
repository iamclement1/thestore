// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx_puPiABTwcB-XO41afyA6Xr4wTzXF1U",
  authDomain: "the-store-b3c99.firebaseapp.com",
  projectId: "the-store-b3c99",
  storageBucket: "the-store-b3c99.appspot.com",
  messagingSenderId: "536408356149",
  appId: "1:536408356149:web:116abfa8c3af15d83dc87c",
  measurementId: "G-L6T1JRLDLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fireDB = getFirestore(app)

export default fireDB


// I am using firebase authentiation and database for this project