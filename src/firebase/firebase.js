// import * as firebase from "firebase/app";
import "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVwhTO9cLmgCqYD9lN5UvAmFJ6LzZTYo",
  authDomain: "mountindo-2-2298f.firebaseapp.com",
  projectId: "mountindo-2-2298f",
  storageBucket: "mountindo-2-2298f.appspot.com",
  messagingSenderId: "928153527022",
  appId: "1:928153527022:web:4f9875f1016c89974289ff",
  measurementId: "G-VM07C55P2N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);