import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyADmSOfQlb4scrsTwPbQPU5V03aiuymbto",
  authDomain: "tiktok2-666e6.firebaseapp.com",
  projectId: "tiktok2-666e6",
  storageBucket: "tiktok2-666e6.appspot.com",
  messagingSenderId: "957296396396",
  appId: "1:957296396396:web:826ab8a86a5586309bf049"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;