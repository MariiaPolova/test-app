import React from 'react';
import './LogIn.css';
import {withRouter} from 'react-router-dom';



class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = { isLogged: false };
    }

    handleInputSubmit  = (event) =>{
        event.preventDefault();
        console.log('handleInputSubmit');
        this.setState({isLogged: true});
        this.props.history.push({ pathname: '/vinnytsia',
            state: { isLogged: this.state.isLogged }});
    };

    render(){
        return(

            <div className='LogIn'>
                <div className="logo">
                    <div className="LogIn-b-logo"></div>
                    <span> Smart Office Dashboard</span>
                </div>

                <form onSubmit={this.handleInputSubmit}>
                    <div className="social-signin">
                        <button className="social-signin google">
                            Log In with
                            <i className="fab fa-google-plus-g" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LogIn);