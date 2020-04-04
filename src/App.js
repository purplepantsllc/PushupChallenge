// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import firestore from "firestore";
import { Button, Card, Spinner, Navbar } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import PushupCounter from './PushupCounter';
// Configure Firebase.
const config = {
    apiKey: "AIzaSyD8G9JmSEDqQT8Ae64g3BpuToRk4YYY_mo",
    authDomain: "pushup-30791.firebaseapp.com",
    databaseURL: "https://pushup-30791.firebaseio.com",
    projectId: "pushup-30791",
    storageBucket: "pushup-30791.appspot.com",
    messagingSenderId: "235185051023",
    appId: "1:235185051023:web:f219df8d36dc037c5ee7fa",
    measurementId: "G-K929YMYWRR"
    // ...
};
const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: undefined,
        };
    }

    componentDidMount() {
        // This binding is necessary to make `this` work in the callback
        //firebase.auth().signOut()
        // firebase.auth().onAuthStateChanged(function(user) {
        //     
        // });

        this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({isSignedIn: !!user});

            if (user) {
                // User is signed in.
                console.log("Succesfully signed in");
                // console.log(user);
                const userRef = db.collection("users").doc(user.uid).set({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email
                }).then(function() {
                    console.log("Succesfully updated user", user);
                }).catch(function(error) {
                    console.error("Error writing user data: ", error);
                });
            } else {
                // No user is signed in.
                console.log("not signed in");
            }
        });
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    // render() {
    //     console.log("user", currentUser);
    //
    //     return (
    //         <div >
    //
    //             <h1>My App</h1>
    //             <p>Please sign-in:</p>
    //             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    //         </div>
    //     );
    // }

    render() {
        const signedIn = this.state.isSignedIn;
        var user = null;
        if (signedIn) {
            user = firebaseApp.auth().currentUser;
        }

        return (
            <div >
                {
                    (!signedIn || !user)
                    ?
                        (<div>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                        </div>)
                    :
                        (<div >
                            <NavbarComponent userPhoto={user.photoURL}/>
                            <PushupCounter />
                            Hello {user.displayName}. You are now signed In!
                            <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
                        </div>)
                }
            </div>
        );
    }
}
export default App;