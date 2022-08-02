
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAUYFJnYk-M-WnFPa0Xr8zyHSYNdrVtZug",
    authDomain: "rent-me-db.firebaseapp.com",
    projectId: "rent-me-db",
    storageBucket: "rent-me-db.appspot.com",
    messagingSenderId: "435229824190",
    appId: "1:435229824190:web:e72846240907e5295d7aef",
    measurementId: "G-LN00PLJBNM"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);