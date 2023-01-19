import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4M1VU_LS1iY7EVILVuEQunl_B-Mi-KUA",
  authDomain: "postproject-acc1f.firebaseapp.com",
  projectId: "postproject-acc1f",
  storageBucket: "postproject-acc1f.appspot.com",
  messagingSenderId: "382531009186",
  appId: "1:382531009186:web:3c41a903bc3cb206ba75fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
