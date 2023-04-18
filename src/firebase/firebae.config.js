// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqiws6H8AiusBOYanGwOLvW3tW9vPSWOo",
  authDomain: "ema-jhon-63274.firebaseapp.com",
  projectId: "ema-jhon-63274",
  storageBucket: "ema-jhon-63274.appspot.com",
  messagingSenderId: "876970819596",
  appId: "1:876970819596:web:3bac7ee22aa34e28276e29",
  measurementId: "G-9SB9LGME4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;