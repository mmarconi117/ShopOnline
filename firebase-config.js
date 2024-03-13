import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK_yJ7nnTIeV0NEKNA5BA4uxvwqVyXdyc",
  authDomain: "sonnyny-2c71b.firebaseapp.com",
  projectId: "sonnyny-2c71b",
  storageBucket: "sonnyny-2c71b.appspot.com",
  messagingSenderId: "379834532772",
  appId: "1:379834532772:web:640c719063f5e045d0b731",
  measurementId: "G-49WXXKD0HG"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);