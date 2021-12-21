// import firebase from "firebase/compat/app";
// import "firebase/compat/analytics";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBNZInphT4oUa-rbBwWPsNciylzi-YpuMA",
    authDomain: "breaking-bad-81445.firebaseapp.com",
    projectId: "breaking-bad-81445",
    storageBucket: "breaking-bad-81445.appspot.com",
    messagingSenderId: "332739989565",
    appId: "1:332739989565:web:498e4c0bcf7bdd0b529a54",
    measurementId: "G-2CG4CZ7QNF"
  };

  const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
