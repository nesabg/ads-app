import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFVgOqJsZ8ska6QtTXFVot8PB46qMmNMo",
    authDomain: "react-ads-projec.firebaseapp.com",
    databaseURL: "https://react-ads-projec.firebaseio.com",
    projectId: "react-ads-projec",
    storageBucket: "react-ads-projec.appspot.com",
    messagingSenderId: "623449729990",
    appId: "1:623449729990:web:cde352cd72ab88db1760c7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  export default firebase;