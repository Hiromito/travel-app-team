import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnHI7zPKqUhjX8o8l-jum26frM5irw8hg",
  authDomain: "travelproject-8f419.firebaseapp.com",
  databaseURL: "https://travelproject-8f419.firebaseio.com",
  projectId: "travelproject-8f419",
  storageBucket: "travelproject-8f419.appspot.com",
  messagingSenderId: "452674737",
  appId: "1:452674737:web:ac88dc0692037038"
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const firebaseAuth = firebase.auth