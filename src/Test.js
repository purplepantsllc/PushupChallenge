// Import FirebaseAuth and firebase.
import React from 'react';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyD8G9JmSEDqQT8Ae64g3BpuToRk4YYY_mo',
    authDomain: 'https://pushup-30791.firebaseapp.com/',
    // ...
};
firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();
// provider.setCustomParameters({
//     'display': 'popup'
// });
// // Configure FirebaseUI.
// const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '/signedIn',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ]
// };

class App extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.facebookLogin = this.facebookLogin.bind(this);
    }
    facebookLogin() {

        console.log("onclick");
        firebase.auth().signInWithRedirect(provider);
        console.log("redirect");
        firebase.auth().getRedirectResult().then(function(result) {
            console.log(result);
            if (result.credential) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // ...
                console.log(result);
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error);
            console.log("error");
        });

    }
    render() {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <button onClick={this.facebookLogin}>
                    Activate Lasers
                </button>

            </div>
        );
    }
}

export default App;