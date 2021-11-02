import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
   apiKey: "AIzaSyBIbOd7XJCMZuiR_xz7mzKhiHjuV7sdyQM",
   authDomain: "crown-db-25658.firebaseapp.com",
   projectId: "crown-db-25658",
   storageBucket: "crown-db-25658.appspot.com",
   messagingSenderId: "989212108724",
   appId: "1:989212108724:web:95b6a7bcb018ee5b2834e1"
};
 
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;