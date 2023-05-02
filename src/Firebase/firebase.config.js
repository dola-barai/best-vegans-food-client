// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZjzybDCQ_pPjoNq9QIsHFkyf6b5by_o",
  authDomain: "best-vegans-food.firebaseapp.com",
  projectId: "best-vegans-food",
  storageBucket: "best-vegans-food.appspot.com",
  messagingSenderId: "501023000321",
  appId: "1:501023000321:web:374d52288f1dae655c7d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;