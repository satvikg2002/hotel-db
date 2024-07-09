import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyClQg7GC6kYpOieIa9FFwfIf_C_ozVcwxY",
    authDomain: "hotel-db-5781d.firebaseapp.com",
    projectId: "hotel-db-5781d",
    storageBucket: "hotel-db-5781d.appspot.com",
    messagingSenderId: "204885851573",
    appId: "1:204885851573:web:be9563528b651d53322dfc",
    measurementId: "G-KFC2TBL46L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);