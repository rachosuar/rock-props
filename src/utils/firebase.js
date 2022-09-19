import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYcbSxd-ok-RA1ybyTAShK5aJj6593Tuc",
  authDomain: "roackandpropsapp.firebaseapp.com",
  projectId: "roackandpropsapp",
  storageBucket: "roackandpropsapp.appspot.com",
  messagingSenderId: "849651766552",
  appId: "1:849651766552:web:c53ebff63f6afb22333a6d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
