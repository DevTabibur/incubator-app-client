import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBTlfzDWIAOP98FuXkC8K6nE8FvSS6bX3I",
  // authDomain: "incubator-app.firebaseapp.com",
  // projectId: "incubator-app",
  // storageBucket: "incubator-app.appspot.com",
  // messagingSenderId: "376251033861",
  // appId: "1:376251033861:web:8aa4bc7f7aaa4fb38aef6c"

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;