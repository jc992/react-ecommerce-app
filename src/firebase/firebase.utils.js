import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYR7HsyV5ANwuOzcuScxuG-k6MQwppIvY",
    authDomain: "crwn-db-ce2ad.firebaseapp.com",
    databaseURL: "https://crwn-db-ce2ad.firebaseio.com",
    projectId: "crwn-db-ce2ad",
    storageBucket: "crwn-db-ce2ad.appspot.com",
    messagingSenderId: "187515026081",
    appId: "1:187515026081:web:15dcd0b97e9b7a0af08ee0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;