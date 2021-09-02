import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAthm589Yd-4WhN0Eoeag0clUprek3YBxM",
  authDomain: "mshahanwaz-v2.firebaseapp.com",
  projectId: "mshahanwaz-v2",
  storageBucket: "mshahanwaz-v2.appspot.com",
  messagingSenderId: "1015662104806",
  appId: "1:1015662104806:web:586d1b540800ede4666b27",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

