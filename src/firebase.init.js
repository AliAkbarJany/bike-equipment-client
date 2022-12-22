// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4mqsOxHdpufZtqF4PyBOFT6TmtJ8t0C4",
  authDomain: "assignment-12-8ac45.firebaseapp.com",
  projectId: "assignment-12-8ac45",
  storageBucket: "assignment-12-8ac45.appspot.com",
  messagingSenderId: "141765799214",
  appId: "1:141765799214:web:dbfdf1c28c0825c731debf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;