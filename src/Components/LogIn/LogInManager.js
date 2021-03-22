import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const LogInManager = () => {
    const [loggedInUser , setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from :{ pathname :'/'} };
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        name: '',
        photo: '',
        error: '',
        success: false
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email} 
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleBlur = (e) => {
        let isFormValid = true;

        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    var user = userCredential.user;
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    var user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)

                });
        }
        e.preventDefault()
    }


    return (
        <div className="login-area text-center">
            {
                user.isSignedIn && <div>
                    <p>Welcome ,{user.name}</p>
                    <p>Email:{user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign up</label>

            <div className='form tex-center'>
                <form onClick={handleSubmit}>
                        <h2 class="text-center">Create New Account</h2>
                    {newUser && <input name='name' type="text" onBlur={handleBlur} placeholder='Your Name' />}
                    <br />
                    <input type="text" name="email" onBlur={handleBlur} placeholder='Enter your email' required />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder='Enter your password' required />
                    <br />
                  <button class="btn btn-primary mt-3" type="submit">Sign In</button>
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'LoggedIn'} successfully</p>
                }
            </div>
            <button class="btn btn-success" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default LogInManager;