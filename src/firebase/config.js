import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqRLqPJrRD4vn1cBPdUd0Qv4HFgc7vNVs",
  authDomain: "vivero-los-tilos.firebaseapp.com",
  projectId: "vivero-los-tilos",
  storageBucket: "vivero-los-tilos.appspot.com",
  messagingSenderId: "384786005010",
  appId: "1:384786005010:web:2d5d8d81b6c97abaf02ccb"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

