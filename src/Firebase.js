// import * as firebase from "firebase/app";

// import "firebase/firestore"
// import 'firebase/analytics'
// import 'firebase/auth'
// import 'firebase/messaging'

// const firebaseConfig = {
//     apiKey: "AIzaSyD1ELf2tY7Y3zlZieEmsTY17ssr_hy-zg0",
//     authDomain: "uber-eats-379714.firebaseapp.com",
//     projectId: "uber-eats-379714",
//     storageBucket: "uber-eats-379714.appspot.com",
//     messagingSenderId: "922890952571",
//     appId: "1:922890952571:web:12cc16b3c8838a257ca7de"
//   };

//  firebase.initializeApp(firebaseConfig);
//  const  db = firebase.firestore() ;
// export default db ;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChTZzIpS7YORYbga3V94Zeik4HT5JSLuc",
  authDomain: "fooduber-61991.firebaseapp.com",
  projectId: "fooduber-61991",
  storageBucket: "fooduber-61991.appspot.com",
  messagingSenderId: "770012545788",
  appId: "1:770012545788:web:8f26d8df2110bf3ae70d79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;