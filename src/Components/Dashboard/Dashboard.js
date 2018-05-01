import React from 'react'
import { Route } from 'react-router-dom'
import VinnytsiaDashboard from '../Dashboard/VinnytsiaDashboard';
import LvivDashboard from '../Dashboard/LvivDashboard';
import './Dashboard.css';

const routes = [
    {
        path: "/lviv",
        component:  LvivDashboard
    },
    {
        path: "/vinnytsia",
        component: VinnytsiaDashboard
    }
];

const Dashboard = () => (
    <main className="Dashboard-b-dashboard__grid">
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ))}

    </main>


);

export default Dashboard