import { auth } from 'firebase'

export function login ({email, password}, successCb, errorCb) {
  auth().signInWithEmailAndPassword(email, password)
    .then(successCb)
    .catch(err => errorCb(err.message))
}

export function register (email, password) {
  auth().createUserWithEmailAndPassword(email, password)
    .then(console.log)
    .catch(console.log)
}

export function logout (successCb, errorCb) {
  auth().signOut().then(successCb).catch(errorCb)
}

export function userId () {
  return new Promise((resolve) => {
    auth().onAuthStateChanged(user => {
      if (!user) {
        return resolve(user)
      }

      return resolve(user.uid)
    })
  })
}