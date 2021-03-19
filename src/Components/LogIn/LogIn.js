import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const LogIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }

    const handleSignIn = () => {
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         var user = userCredential.user;
        //         console.log(user)
        //         // ...
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         // ..
        //     });
    }
    return (
        <div>
            <div class='text-center'>
                <h3>Create an account</h3>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <br />
                    <input type="text" placeholder='UserName or Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="password" placeholder='Confirm Password' />
                    <br />
                    <input onClick={handleSignIn} type="submit" value="Create an Account" />
                </form>
            </div>
            <div class='text-center mt-4'>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>





        </div>
    );
};

export default LogIn;