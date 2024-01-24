import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD2txSwJZ_X5Ys1x-aipOenrnA6tLVGEQ",
  authDomain: "convers-2e9c1.firebaseapp.com",
  projectId: "convers-2e9c1",
  storageBucket: "convers-2e9c1.appspot.com",
  messagingSenderId: "398757408056",
  appId: "1:398757408056:web:ecb82c4a1da6ca0430a5cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
