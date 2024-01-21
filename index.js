// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX9OwjkhohFt4mEkA035QW0gvCWG0G3c8",
    authDomain: "authentication-3746b.firebaseapp.com",
    projectId: "authentication-3746b",
    storageBucket: "authentication-3746b.appspot.com",
    messagingSenderId: "157772966136",
    appId: "1:157772966136:web:eb9d6800abab906448330d",
    measurementId: "G-FTY5VZ94KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


signup.addEventListener('click',(e)=>{
var email= document.getElementById('email').value;
var password= document.getElementById('password').value;
    signInWithCustomToken(auth, token)
.then((userCredential) => {
// Signed in
const user = userCredential.user;
alert('User created');
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// ...
});
});