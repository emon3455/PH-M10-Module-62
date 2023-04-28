import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkIi3twymZjNYWQ0XObb8lv7hmhk5boU8",
  authDomain: "dragon-newspaper-auth.firebaseapp.com",
  projectId: "dragon-newspaper-auth",
  storageBucket: "dragon-newspaper-auth.appspot.com",
  messagingSenderId: "1071695416356",
  appId: "1:1071695416356:web:351f147713efdbaee8dcb1"
};


export const app = initializeApp(firebaseConfig);