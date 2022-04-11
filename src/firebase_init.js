// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-mPLlbwSMfOLP-wPgl2md0LRq81EoOd0",
  authDomain: "m60-genius-car-services.firebaseapp.com",
  projectId: "m60-genius-car-services",
  storageBucket: "m60-genius-car-services.appspot.com",
  messagingSenderId: "918759815465",
  appId: "1:918759815465:web:9a806d9b9592a37f2d1f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;