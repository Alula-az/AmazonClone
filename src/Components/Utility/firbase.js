// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//auth
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ObJHIkbmj8C9iqfa5tgycdncHE7V3qc",
  authDomain: "clone-c9127.firebaseapp.com",
  projectId: "clone-c9127",
  storageBucket: "clone-c9127.firebasestorage.app",
  messagingSenderId: "871125324534",
  appId: "1:871125324534:web:3bfc2d5bb053544e0852d7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = app.firestore()



//----------------------------------------------------------------------
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyAKH9mzbYc1nWI8WvJyRIPGXpeGFDKvB5o",
//     authDomain: "e-feb-dd351.firebaseapp.com",
//     projectId: "e-feb-dd351",
//     storageBucket: "e-feb-dd351.appspot.com",
//     messagingSenderId: "750481143199",
//     appId: "1:750481143199:web:148c588c449cf6b5e179aa",
//     measurementId: "G-W3QM84008B"
//   };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };
