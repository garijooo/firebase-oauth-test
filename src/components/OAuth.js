import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from '../firebase/config';
import history from '../history';


class OAuth extends React.Component {
    componentDidMount(){
        if(localStorage.getItem("auth-token")) history.push('/authorized');
    }

    signInHandler = async () => {
        firebase.initializeApp(firebaseConfig);
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            const { credential } = await firebase.auth().signInWithPopup(provider);
            const { accessToken } = credential;
            console.log(accessToken);
            localStorage.setItem("auth-token", accessToken);
            history.push('/authorized');
        } catch(e) {    
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                OAuth
                <button onClick={this.signInHandler}>Sign in with GitHub</button>
            </div>
        )
    }
}

export default OAuth;