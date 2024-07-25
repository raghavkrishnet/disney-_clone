import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDELl0jsCANcVEzAWowkO2boC_4MTCJaVw",
  authDomain: "disneyplus-clone-ffece.firebaseapp.com",
  projectId: "disneyplus-clone-ffece",
  storageBucket: "disneyplus-clone-ffece.appspot.com",
  messagingSenderId: "648919773033",
  appId: "1:648919773033:web:968716cf5df3284d2117f8",
  measurementId: "G-C2QYTDB7P9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
