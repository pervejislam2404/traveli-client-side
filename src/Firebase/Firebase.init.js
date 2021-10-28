import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

const firebaseAppInitialize = () => {
    return initializeApp(firebaseConfig);
}

export default firebaseAppInitialize;