import React, { Component } from 'react';
import VinnytsiaDashboard from '../Dashboard/VinnytsiaDashboard';
import LvivDashboard from '../Dashboard/LvivDashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SideBar.css';

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: "/vinnytsia",
        component: VinnytsiaDashboard
    },
    {
        path: "/lviv",
        component: LvivDashboard
    }
];

const SideBar = () => (
    <Router>
        <div className="SideBar">
            <div className="SideBar-b-dashboard__menu">
                <ul className="SideBar-b-main-menu">
                    <li>
                        <Link to="/vinnytsia">Vinnytsia</Link>
                    </li>
                    <li>
                        <Link to="/lviv">Lviv</Link>
                    </li>
                </ul>
            </div>
        </div>
    </Router>

);

export default SideBar;