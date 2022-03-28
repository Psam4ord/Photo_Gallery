
import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore';

import {getStorage} from 'firebase/storage';


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCNeoSbwJS7V81PfylIbSUHD6StL67y6tU",
  authDomain: "photo-gallery-3ae72.firebaseapp.com",
  projectId: "photo-gallery-3ae72",
  storageBucket: "photo-gallery-3ae72.appspot.com",
  messagingSenderId: "510040309443",
  appId: "1:510040309443:web:f83851d18c7870ddbcec76"
};




// Initialize Firebase
const app = initializeApp(config);
//const db = getFirestore(app);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};