import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAZHf_Ufi0qIMFwSZgtCXLCjrBoKQLd2f0",
  authDomain: "barter-system-app-629ea.firebaseapp.com",
  projectId: "barter-system-app-629ea",
  storageBucket: "barter-system-app-629ea.appspot.com",
  messagingSenderId: "49824994040",
  appId: "1:49824994040:web:739867496163dc8544210d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();