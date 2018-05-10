import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import './SideBar.css';
import LogoutContainer from './GoogleLogout/LogoutContainer';
import Store from "../../Redux/Store";
import {connect} from "react-redux";

const getCurrentStorage = () => {
    const {store,  reducer} = Store;
    console.log('store.getState()');
    console.log(store.getState());
    return store.getState();
};


class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuClosed: true,
            submenuToggled: true
        }
    }

    handleMenuClick = () => {
        const currentState = this.state.menuClosed;
        this.setState({ menuClosed: !currentState });
    };

    toggleSubmenu= () => {
        const currentState = this.state.submenuToggled;
        this.setState({submenuToggled: !currentState});
    }

    handleLogout = (event) =>{
        console.log('log out in sidebar');
        this.props.history.push('/');

    };

    render(){

        return(
            <aside>
                <div className="SideBar-b-dashboard__menu">
                    <div className="SideBar-b-logo"></div>
                    <i className="fa fa-bars fa-2x toggle-btn" onClick={this.handleMenuClick}></i>
                    <div className={(this.state.menuClosed ? 'closed':'')}
                         id="responsive-menu-content">
                        <div className="SideBar-b-logged-user">
                            <img src={this.props.user.imgURL} alt=""/>
                            <div className="SideBar-b-logged-user-name">{this.props.user.name}</div>
                            <span className="SideBar-b-logged-user-quit">

                            <LogoutContainer handleLogout = {this.handleLogout}/>
                        </span>
                        </div>
                        <ul className="SideBar-b-main-menu">
                            <li className="SideBar-b-main-title" onClick={this.toggleSubmenu}>
                                <a tabIndex='1'> <i className="fas fa-map-marker-alt"></i> Office </a>
                                <ul className={"SideBar-b-submenu " + (this.state.submenuToggled ? 'submenuToggled': '')}
                                id="toggled-submenu">
                                        <li >
                                            <Link to="/vinnytsia"> <i className="far fa-building"/> Vinnytsia</Link>
                                        </li>
                                        <li>
                                            <Link to="/lviv"> <i className="fas fa-home"/> Lviv</Link>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </aside>
        )
    }
}


const mapStateToProps = (state) =>({
    user: state.user
});

export default withRouter(connect(mapStateToProps)(SideBar));