import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFUchRguJr8BYFOS4oelk_g69UetNk0UY",
  authDomain: "blogweb-9b28d.firebaseapp.com",
  projectId: "blogweb-9b28d",
  storageBucket: "blogweb-9b28d.appspot.com",
  messagingSenderId: "212525301717",
  appId: "1:212525301717:web:5f874061b800a2d5b1875c",
  measurementId: "G-CB4TTX1TWT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// const auth = getAuth(app);

// export {auth , db , storage , analytics};