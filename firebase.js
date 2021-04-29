import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUrQEbJc0IbxX648qE8z0CnEd_DBOg8o",
  authDomain: "signal-clone-9471a.firebaseapp.com",
  projectId: "signal-clone-9471a",
  storageBucket: "signal-clone-9471a.appspot.com",
  messagingSenderId: "277621758725",
  appId: "1:277621758725:web:51e80e340a75931c8fb56c",
  measurementId: "G-HVJT6GJQLK",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
