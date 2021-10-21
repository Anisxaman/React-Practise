import "./Login.css"
import React from 'react';
// import { Link} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";





const Login = () => {

    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLWvN09sNlxeB7UQrKXbo7lu576FSAN0w",
  authDomain: "popup-b0fb7.firebaseapp.com",
  projectId: "popup-b0fb7",
  storageBucket: "popup-b0fb7.appspot.com",
  messagingSenderId: "1042540336410",
  appId: "1:1042540336410:web:d3c7e38572e958916688a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();


const handle=()=>{

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}




    






    return (
        <>

        <button onClick={handle}  className="btn  btn-primary"> Google Sign In</button>

       


            
        </>
    );
};

export default Login;