// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaZ9WGbYWQDxx9Mqru8XlEH8Y0KCVPn1Y",
  authDomain: "gallery-app-cf7b6.firebaseapp.com",
  projectId: "gallery-app-cf7b6",
  storageBucket: "gallery-app-cf7b6.appspot.com",
  messagingSenderId: "820372917039",
  appId: "1:820372917039:web:0ea41455819de2ad8defda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);


// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);
