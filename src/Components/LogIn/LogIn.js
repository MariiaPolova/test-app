import React from 'react';
import Input from './Input';
import './LogIn.css';
import {Redirect, withRouter} from 'react-router-dom';



class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', password: '', isFailed: false };
    }

    handleInputChange = (event) => {
        const target  = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleInputSubmit  = (event) =>{
        event.preventDefault();

        const {username, password} = this.state;
        const {history} = this.props;
        this.setState({isFailed: false});

        // if(!(username === 'qwe' && password === 'rty')){
        //     return this.setState({isFailed: true});
        // }

        console.log(history);
        this.props.history.push('/vinnytsia');
    }

    render(){
        return(

            <div className='LogIn'>
                <div className="logo">
                    <div className="LogIn-b-logo"></div>
                </div>

                <form onSubmit={this.handleInputSubmit}>
                    <label>
                        <Input className="fa fa-user" type="text" name="username" value={this.state.username} placeholder='Input username'
                               onChange={this.handleInputChange}/>
                        <Input className="fas fa-lock" type="password" name="password" value={this.state.password} placeholder='Input password'
                               onChange={this.handleInputChange}/>
                    </label>

                    <button> Log In</button>
                    <div className="social-signin">
                        <button className="social-signin google" onClick={ this.props.onClick }>
                            Sign Up with
                            <i className="fab fa-google-plus-g" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LogIn);