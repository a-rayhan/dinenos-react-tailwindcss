// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1OvJoIKqUAwdmZ3Mzx6FS82BAhDCrYWc",
  authDomain: "dinenos.firebaseapp.com",
  projectId: "dinenos",
  storageBucket: "dinenos.appspot.com",
  messagingSenderId: "860848037636",
  appId: "1:860848037636:web:b8947ab406471a4fedba51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;