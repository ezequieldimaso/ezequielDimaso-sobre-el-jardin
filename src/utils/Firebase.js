import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ATF_TyrB4vu7cv-kcyoJt1iJIyuRzL8",
  authDomain: "sobre-el-jardin.firebaseapp.com",
  projectId: "sobre-el-jardin",
  storageBucket: "sobre-el-jardin.appspot.com",
  messagingSenderId: "187828045269",
  appId: "1:187828045269:web:83086513ca4f1c5bef695c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);