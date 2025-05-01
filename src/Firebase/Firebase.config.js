// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI8o3o0uqLSGNe1J7BVAWVoe8ZBw0iANg",
    authDomain: "dragon-news-web-cf09e.firebaseapp.com",
    projectId: "dragon-news-web-cf09e",
    storageBucket: "dragon-news-web-cf09e.firebasestorage.app",
    messagingSenderId: "648975297189",
    appId: "1:648975297189:web:577ad07c9d334b39b07b4c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);