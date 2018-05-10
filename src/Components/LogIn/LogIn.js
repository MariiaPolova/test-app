import React from 'react';
import './LogIn.css';
import {withRouter} from 'react-router-dom';
import LoginContainer from "./GoogleLogin/LoginContainer";

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLogged: false};
    }

   handleInputSubmit  = (event) =>{
        console.log('handle submit');
        this.props.history.push({pathname: '/vinnytsia'});
    };

    render(){
        return(

            <div className='LogIn'>
                <div className="logo">
                    <div className="LogIn-b-logo"></div>
                    <span> Smart Office Dashboard</span>
                </div>

                <LoginContainer handleSubmit={this.handleInputSubmit}/>
            </div>
        )
    }
}

export default withRouter(LogIn);