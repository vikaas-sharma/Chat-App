import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTBjYCzIgJEzliYeIvRc4ERe0W8jbWkiQ",
  authDomain: "instantchat-916af.firebaseapp.com",
  projectId: "instantchat-916af",
  storageBucket: "instantchat-916af.appspot.com",
  messagingSenderId: "231243856214",
  appId: "1:231243856214:web:6ef3515df1bc3e6c8f7ef7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);