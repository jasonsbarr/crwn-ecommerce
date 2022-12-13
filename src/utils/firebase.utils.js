import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP.apiKey,
  authDomain: process.env.REACT_APP.authDomain,
  projectId: process.env.REACT_APP.projectId,
  storageBucket: process.env.REACT_APP.storageBucket,
  messagingSenderId: process.env.REACT_APP.messagingSenderId,
  appId: process.env.REACT_APP.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
