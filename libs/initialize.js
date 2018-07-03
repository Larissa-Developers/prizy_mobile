import firebaseConfig from '../config/firebase'
import { initializeApp } from 'firebase'

const initializeFirebase = () => {
  initializeApp(firebaseConfig)
}

export { initializeFirebase }