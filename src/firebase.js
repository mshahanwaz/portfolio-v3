import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAthm589Yd-4WhN0Eoeag0clUprek3YBxM",
  authDomain: "mshahanwaz-v2.firebaseapp.com",
  projectId: "mshahanwaz-v2",
  storageBucket: "mshahanwaz-v2.appspot.com",
  messagingSenderId: "1015662104806",
  appId: "1:1015662104806:web:586d1b540800ede4666b27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
