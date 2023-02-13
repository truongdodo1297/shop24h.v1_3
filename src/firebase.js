import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_TSXF6EFn5gJq_7m8UYN5dTngdpqs9s8",
  authDomain: "shop24h-fc419.firebaseapp.com",
  databaseURL: "https://shop24h-fc419-default-rtdb.firebaseio.com",
  projectId: "shop24h-fc419",
  storageBucket: "shop24h-fc419.appspot.com",
  messagingSenderId: "296935975521",
  appId: "1:296935975521:web:3ef880aa8191eea000d820",
  measurementId: "G-MSR56X2V19"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
