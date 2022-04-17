import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeuFivFdJmTBJr_u-YB3H82LAdXgWo2bY",
    authDomain: "alba-7f5ff.firebaseapp.com",
    projectId: "alba-7f5ff",
    storageBucket: "alba-7f5ff.appspot.com",
    messagingSenderId: "440229832958",
    appId: "1:440229832958:web:3b97112d8220de0a375daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);