import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDxCwLUFdSJEs9aZgJaR_gFO1UtSM1U0bM",
    authDomain: "hotstarclone-89a01.firebaseapp.com",
    projectId: "hotstarclone-89a01",
    storageBucket: "hotstarclone-89a01.appspot.com",
    messagingSenderId: "1051351107418",
    appId: "1:1051351107418:web:5c75827b58db4b3c141563"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;