import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuqS47x8mWO2bgv-X50ztwEldFMJrfH7c",
  authDomain: "fir-practice-759fb.firebaseapp.com",
  projectId: "fir-practice-759fb",
  storageBucket: "fir-practice-759fb.appspot.com",
  messagingSenderId: "54102415548",
  appId: "1:54102415548:web:36ebc94f6aa5d585fa58b9"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);