import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyATilSw5ryPbv9HWHc3aDHPa2zWABjdEjI",
  authDomain: "barter-system-app-45263.firebaseapp.com",
  projectId: "barter-system-app-45263",
  storageBucket: "barter-system-app-45263.appspot.com",
  messagingSenderId: "954402644134",
  appId: "1:954402644134:web:d547f07cd1e53096049467"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();