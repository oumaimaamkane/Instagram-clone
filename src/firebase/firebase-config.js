// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCqzbomNgLPKRH9JBq7iSytqHDTnqi3vuY",
  authDomain: "instagram-clone-fa3bd.firebaseapp.com",
  projectId: "instagram-clone-fa3bd",
  storageBucket: "instagram-clone-fa3bd.appspot.com",
  messagingSenderId: "172640541567",
  appId: "1:172640541567:web:d124916568f80a4f86984a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{app , auth , firestore , storage};