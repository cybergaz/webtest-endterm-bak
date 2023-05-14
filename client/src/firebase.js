
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZGFsdkxhgzcIRVlgafZ_xRKEaye_SQ6Y",
  authDomain: "twitter-temp.firebaseapp.com",
  projectId: "twitter-temp",
  storageBucket: "twitter-temp.appspot.com",
  messagingSenderId: "575199712477",
  appId: "1:575199712477:web:e1247f0b56d529daaeb734",
  measurementId: "G-LQ6VPJQYJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// // import firebase from "firebase/app";
// // import "firebase/auth";
// // import "firebase/firestore";
// // import "firebase/storage";
// //
// const firebaseConfig = {
//   apiKey: process.env.VITE_FIREBASE_API_KEY,
//   authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_FIREBASE_APP_ID,
//   measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();
// export const db = app.firestore();
// export const storage = app.storage();
//
// // Enable offline data
// db.enablePersistence().catch((err) => {
//   console.log(`Firebase Persistence error ${err.code}`);
// });
//
// export const usersCollection = db.collection("users");
// export const songsCollection = db.collection("songs");
// export const commentsCollection = db.collection("comments");
//
// export default app;
