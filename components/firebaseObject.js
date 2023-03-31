import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHAB50Xesf_TLTdXIpm8GoqO_GfXKMBaY",
    authDomain: "festivaldb-bb932.firebaseapp.com",
    projectId: "festivaldb-bb932",
    storageBucket: "festivaldb-bb932.appspot.com",
    messagingSenderId: "796443855898",
    appId: "1:796443855898:web:24ec72c7f8dd455af5d5a3",
    measurementId: "G-QCTB1KYY3C"
};

const app = initializeApp(firebaseConfig);
export const firebaseObj = getFirestore(app);



