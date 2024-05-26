import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1fd9c.firebaseapp.com",
  projectId: "reactchat-1fd9c",
  storageBucket: "reactchat-1fd9c.appspot.com",
  messagingSenderId: "102469408758",
  appId: "1:102469408758:web:715805e93d05ebf7cc59d7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()