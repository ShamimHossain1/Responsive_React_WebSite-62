// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjOUHgREVpwVpIevrAVX98sU8Dwa4LFvM",
    authDomain: "the-news-dragon-client-62.firebaseapp.com",
    projectId: "the-news-dragon-client-62",
    storageBucket: "the-news-dragon-client-62.appspot.com",
    messagingSenderId: "538450734679",
    appId: "1:538450734679:web:5466ca700c6825d894fd12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;