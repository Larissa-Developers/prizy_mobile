import firebaseConfig from '../config/Firebase';
import { initializeApp } from 'firebase';

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export { initializeFirebase };
