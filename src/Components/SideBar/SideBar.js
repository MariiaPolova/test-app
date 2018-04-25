import React, { Component } from 'react';
import { Menu, Compass } from 'react-feather';
import { Link } from "react-router-dom";
import './SideBar.css';
import  '../../feather-icons/feather.css';

const SideBar = () => (
    <aside>
        <div className="SideBar">
            <div className="SideBar-b-dashboard__menu">
                <div className="SideBar-b-logo"></div>
                <ul className="SideBar-b-main-menu">
                    <li>
                        <Link to="/vinnytsia"> <Compass color="white"/> Vinnytsia</Link>
                    </li>
                    <li>
                        <Link to="/lviv"> <Compass color="white"/> Lviv</Link>
                    </li>
                </ul>
            </div>
        </div>

    </aside>



);

export default SideBar;