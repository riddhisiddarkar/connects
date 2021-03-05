import firebaseConfig from "./firebaseConfig";
import firebase from "firebase";

const app = firebase.initializeApp(firebaseConfig);
const storage = app.storage();

export default storage;
