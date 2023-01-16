import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9DSRKqkokoycDp0sKCZGjXTkJ-A4bFc",
  authDomain: "postproject-5c1de.firebaseapp.com",
  projectId: "postproject-5c1de",
  storageBucket: "postproject-5c1de.appspot.com",
  messagingSenderId: "161628019791",
  appId: "1:161628019791:web:cfa0843eda392275531e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();