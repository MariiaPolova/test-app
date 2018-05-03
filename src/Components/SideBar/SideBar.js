import React, { Component } from 'react';
import { Menu, Compass } from 'react-feather';
import {Link, withRouter} from "react-router-dom";
import './SideBar.css';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuClosed: false
        }
    }

    handleMenuClick =()=>{
        const currentState = this.state.menuClosed;
        this.setState({ menuClosed: !currentState });
        console.log(this.state.menuClosed);
    };

    handleLogOut = (event) =>{
        event.preventDefault();
        this.props.history.push('/');
    };

    render(){

        return(
            <aside>
                    <div className="SideBar-b-dashboard__menu"  >
                        <div className="SideBar-b-logo"></div>
                        <i className="fa fa-bars fa-2x toggle-btn" onClick={this.handleMenuClick}></i>
                        <div className="SideBar-b-logged-user">
                            <img src="https://i1.wp.com/planetgazette.uk/wp-content/uploads/2018/04/report-facebook-ceo-mark-zuckerberg-made-3-billion-during-hearings.jpg?resize=510%2C480" alt=""/>
                            <div className="SideBar-b-logged-user-name">Peter Jackson</div>
                            <span className="SideBar-b-logged-user-quit">
                                <i className="fas fa-sign-out-alt" onClick={this.handleLogOut}/>
                            </span>
                        </div>
                        <ul className={"SideBar-b-main-menu out " + (this.state.menuClosed ? 'closed':'')}
                            id="menu-content">
                        <span className='SideBar-b-main-title'>
                            <i className="fas fa-map-marker-alt"></i> Office
                        </span>
                            <li>
                                <Link to="/vinnytsia"> <i className="far fa-building"/> Vinnytsia</Link>
                            </li>
                            <li>
                                <Link to="/lviv"> <i className="fas fa-home"/> Lviv</Link>
                            </li>
                        </ul>
                </div>
            </aside>
        )
    }
}

export default withRouter(SideBar);