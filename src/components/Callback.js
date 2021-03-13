import React from 'react';
import firebase from "firebase/app";

import { firebaseConfig } from '../firebase/cfg';
import "firebase/auth";

class Callback extends React.Component {
    componentDidMount(){
        if(!localStorage.getItem("github-auth-token")) return this.initToken();
    }
    initToken = async () => {
        //const param = new URLSearchParams(this.props.location.search);
        //const GITHUB_CODE = param.get('code');

        firebase.initializeApp(firebaseConfig);
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            const { credential } = await firebase.auth().signInWithPopup(provider);
            const { accessToken } = credential;

            console.log(accessToken);
            //localStorage.setItem("github-auth-token", accessToken);

        } catch(e) {    
            console.log(e);
        }
        /*try{

            const xmlhttp = new XMLHttpRequest();  
            //xmlhttp.open("POST", `https://github.com/login/oauth/access_token`);

            xmlhttp.open('POST','https://github.com/login/oauth/access_token', true);

            xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
            xmlhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
            xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "POST");
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");

            const data = await xmlhttp.send(JSON.stringify({
                 client_id: GITHUB_CLIENT_ID, 
                 client_secret: GITHUB_CLIENT_SECRET, 
                 code: GITHUB_CODE
            }));
            console.log(data);
        } catch(err){
            console.log(err);
        }
        */
    }

    render() {
        return (
            <div>
                Callback
            </div>
        )
    }
}

export default Callback;