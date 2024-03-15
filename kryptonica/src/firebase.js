import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCgT-HCb4OcKr4BQXLJK32CgTcl2-9a9lQ",
  authDomain: "kryptonica-e8816.firebaseapp.com",
  projectId: "kryptonica-e8816",
  storageBucket: "kryptonica-e8816.appspot.com",
  messagingSenderId: "753331349817",
  appId: "1:753331349817:web:4312097d9f5102444be0e8",
  measurementId: "G-WQMNJM9DZ1"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
