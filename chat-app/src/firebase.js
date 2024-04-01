import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtPHQ5afYa3NnM78J3_eTRWYaVZWXeXEQ",
    authDomain: "chatapp-eeacd.firebaseapp.com",
    projectId: "chatapp-eeacd",
    storageBucket: "chatapp-eeacd.appspot.com",
    messagingSenderId: "672139662397",
    appId: "1:672139662397:web:602e4990cb8fc430730654",
    measurementId: "G-YK5RT28T9N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
