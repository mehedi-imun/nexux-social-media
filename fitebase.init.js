// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkg47GVwbx1qQJRKCO4fu_rPJWNomEHWk",
    authDomain: "nexus-c25e2.firebaseapp.com",
    projectId: "nexus-c25e2",
    storageBucket: "nexus-c25e2.appspot.com",
    messagingSenderId: "777647937217",
    appId: "1:777647937217:web:38c7b2383862cef1ace640",
    measurementId: "G-5X3TF9KY2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;