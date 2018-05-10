import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../LogIn.css';

const onSignIn = (googleUser, setLoginData, handleSubmit) =>{
    var profile = googleUser.getBasicProfile();
    let userObj = {
        id: profile.getId(),
        name: profile.getName(),
        imgURL: profile.getImageUrl(),
        email: profile.getEmail(),
        isLogged: true
    };
    setLoginData(userObj);
    handleSubmit();

};

const GoogleButton = ({setLoginData, handleSubmit}) => {
    return(
        <form>
        <div className="social-signin">
            <GoogleLogin clientId="1014734383712-5h8lp2c5jc9knsjkvqmfgrbiqr4731pq.apps.googleusercontent.com"
                         buttonText="Login"
                         onSuccess={(googleUser) => {onSignIn(googleUser, setLoginData, handleSubmit)}}
                         onFalure={onSignIn}
                         className="GoogleLogin">
                <i className="fab fa-google" aria-hidden="true"></i>
                <span className="social-signin google"> Login with Google</span>

            </GoogleLogin>

        </div>
    </form>
        )
    };

export default GoogleButton;