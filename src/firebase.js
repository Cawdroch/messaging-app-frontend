import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "messaging-app-mern-fa99d.firebaseapp.com",
  projectId: "messaging-app-mern-fa99d",
  storageBucket: "messaging-app-mern-fa99d.appspot.com",
  messagingSenderId: "1054886874574",
  appId: "1:1054886874574:web:539d4c33796a3bdaacef9f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
