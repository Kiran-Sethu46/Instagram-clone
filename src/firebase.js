import firebase from "firebase";
const firebaseApp = {
  apiKey: "AIzaSyBWmOQNwSRKX26k5ko1sl9fp4w4zTqObjY",
  authDomain: "instagram-4317f.firebaseapp.com",
  databaseURL: "https://instagram-4317f-default-rtdb.firebaseio.com",
  projectId: "instagram-4317f",
  storageBucket: "instagram-4317f.appspot.com",
  messagingSenderId: "161202642937",
  appId: "1:161202642937:web:81b7f40ca4654e6b7d2728",
  measurementId: "G-83P3TE69GT",
};

const firebaseapp = firebase.initializeApp(firebaseApp);

const db = firebaseapp.firestore();

const auth = firebaseapp.auth();

const storage = firebaseapp.storage();

export { db, auth, storage };
