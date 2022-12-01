import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCPI-l49g9_rzMmY_bXNhDHndVs7hDsM2s",
  authDomain: "projeto71-2.firebaseapp.com",
  projectId: "projeto71-2",
  storageBucket: "projeto71-2.appspot.com",
  messagingSenderId: "76117639509",
  appId: "1:76117639509:web:940f0df25339dae59aefdc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
