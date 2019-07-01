import { db, firebaseAuth } from '../config/constants'

export function auth (email, pw, name) {
  return (dispatch) => new Promise(async (resolve, reject) => {
    firebaseAuth().createUserWithEmailAndPassword(email, pw).then(async (res) => {
      saveUser(name, res.user.uid, res.user.email)
      resolve(dispatch({
        type: 'register',
        data: res
      }))
    }).catch(reject)
  }).catch(async (err) => {
    throw err
  })
}

export function logout () {
  return (dispatch) => {
    firebaseAuth().signOut().then(async () => {
      dispatch({
        type: 'logout',
      })
    })
  }
}

export function login (email, pw) {
  return (dispatch) => new Promise(async (resolve, reject) => {
    firebaseAuth().signInWithEmailAndPassword(email, pw).then(async (res) => {
      resolve(dispatch({
        type: 'login',
        data: res
      }))
    }).catch(reject)
  }).catch(async (err) => {
    throw err
  })
}

export function resetPassword (email) {
  return (dispatch) => new Promise(async (resolve, reject) => {
    firebaseAuth().sendPasswordResetEmail(email).then(async () => {
      resolve(dispatch({
        type: 'reset_password',
      }))
    }).catch(reject)
  }).catch(async (err) => {
    throw err
  })
}

export function saveUser (name, uid, email) {
  db.collection("users").doc(uid).set({
    name: name,
    email: email
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}
