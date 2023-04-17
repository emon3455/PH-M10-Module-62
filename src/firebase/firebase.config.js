// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkIi3twymZjNYWQ0XObb8lv7hmhk5boU8",
  authDomain: "dragon-newspaper-auth.firebaseapp.com",
  projectId: "dragon-newspaper-auth",
  storageBucket: "dragon-newspaper-auth.appspot.com",
  messagingSenderId: "1071695416356",
  appId: "1:1071695416356:web:351f147713efdbaee8dcb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);