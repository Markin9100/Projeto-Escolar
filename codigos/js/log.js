// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

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

sbt.addEventListener('click',(e) =>{
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, 'user/' + user.uid),{
      last_login: dt,
  })

  alert('User Loged in!')
})

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });


})