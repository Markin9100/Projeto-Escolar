// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHKljoW7Xh6c6KIta6SfJu9gfaCS3duKQ",
  authDomain: "flitz-tech-ca3ca.firebaseapp.com",
  databaseURL: "https://flitz-tech-ca3ca-default-rtdb.firebaseio.com",
  projectId: "flitz-tech-ca3ca",
  storageBucket: "flitz-tech-ca3ca.appspot.com",
  messagingSenderId: "1098936337473",
  appId: "1:1098936337473:web:df85a53827877219b172c0"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

sbt.addEventListener('click',(e) => {

var email = document.getElementById('email').value;
var password = document.getElementById('pass').value;
var username = document.getElementById('name').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    set(ref(database, 'user/' + user.uid),{
      username: username,
      email: email
    })
    alert('UserCreated')
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('errorMessage')
    // ..
});
});