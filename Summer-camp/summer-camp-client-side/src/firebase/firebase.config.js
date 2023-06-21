// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_Auth_Domain,
    projectId: import.meta.env.VITE_Project_Id,
    storageBucket: import.meta.env.VITE_Storage_Bucket,
    messagingSenderId: import.meta.env.VITE_Messaging_SenderId,
    appId: import.meta.env.VITE_App_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;