import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Firebase products https://firebase.google.com/docs/web/setup#available-libraries

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCEyL3wWkdVOqCbIJdz1dhM4Mq1d2YeUU",
  authDomain: "proyectofinal-reactjs-32aed.firebaseapp.com",
  projectId: "proyectofinal-reactjs-32aed",
  storageBucket: "proyectofinal-reactjs-32aed.appspot.com",
  messagingSenderId: "270434348055",
  appId: "1:270434348055:web:3bed0dc9351b3a0d088052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const ddbb = getFirestore(app);
