import firebase from "firebase";
import  firestore from "firebase/firestore";



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFDJLnhfQPH5NgPXl-tWsT_67K59QILJs",
    authDomain: "jojo-chat-e412d.firebaseapp.com",
    databaseURL: "https://jojo-chat-e412d.firebaseio.com",
    projectId: "jojo-chat-e412d",
    storageBucket: "jojo-chat-e412d.appspot.com",
    messagingSenderId: "230084746541"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  console.log('init firestore')

export default firebaseApp.firestore()