// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq23-yO3swmUF9PPW_K2ASQctAX9rqz2Y",
  authDomain: "assignment-10-688d3.firebaseapp.com",
  projectId: "assignment-10-688d3",
  storageBucket: "assignment-10-688d3.appspot.com",
  messagingSenderId: "556076265448",
  appId: "1:556076265448:web:40ad02347e476fd72d7e5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
