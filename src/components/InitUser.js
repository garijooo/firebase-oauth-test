import React from 'react';
import firebase from "firebase/app";
import { firebaseConfig } from '../firebase/cfg';
import "firebase/auth";

class IninUser extends React.Component {
    signInHandler = async () => {
        firebase.initializeApp(firebaseConfig);
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            const { credential } = await firebase.auth().signInWithPopup(provider);
            const { accessToken } = credential;

            console.log(accessToken);
        } catch(e) {    
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                Init user
                <button onClick={this.signInHandler}>Sign in with GitHub</button>
            </div>
        )
    }
}

export default IninUser;