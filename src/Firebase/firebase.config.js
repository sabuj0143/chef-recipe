// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID


    // apiKey: "AIzaSyBrCXSSQGTNES4z0f6yT2WUmgyRWmwYkKw",
    // authDomain: "food-network-8593b.firebaseapp.com",
    // projectId: "food-network-8593b",
    // storageBucket: "food-network-8593b.appspot.com",
    // messagingSenderId: "107184731678",
    // appId: "1:107184731678:web:266aacd58ad8782b55a00f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;