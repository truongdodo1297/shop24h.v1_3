import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2RwEahJqaKxaIewlDvAkrX2KvupiPan0",
  authDomain: "shop24h-19875.firebaseapp.com",
  projectId: "shop24h-19875",
  storageBucket: "shop24h-19875.appspot.com",
  messagingSenderId: "34358971648",
  appId: "1:34358971648:web:5d44227da4823d8c2277e5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
