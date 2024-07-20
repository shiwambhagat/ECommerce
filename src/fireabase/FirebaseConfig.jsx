// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi6b9-ypAbSuQAiQJA2V67UJp73r02J7E",
  authDomain: "myfirstproject-349e3.firebaseapp.com",
  projectId: "myfirstproject-349e3",
  storageBucket: "myfirstproject-349e3.appspot.com",
  messagingSenderId: "885621128116",
  appId: "1:885621128116:web:2d422afb718703171b50e1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}