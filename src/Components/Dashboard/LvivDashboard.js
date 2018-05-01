import React, { Component, Fragment } from 'react';
import Gallery from './Mansonry';
import './Dashboard.css';
import SideBar from '../SideBar/SideBar';
import './Dashboard.css';



class LvivDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            elements: [
                { width :300, height:600, id:12,
                    img:"http://dreamstop.com/wp-content/uploads/2013/07/office-dream-meaning.jpeg"},
                { width :300, height:300, id:13},
                { width :600, height:300, id:14},
                { width :300, height:600, id:15},
                { width :300, height:300, id:17},
                { width :300, height:300, id:18},
            ]
        };
    }


    render() {
        return(
            <Fragment>
                <SideBar/>
                <main className="Dashboard-b-dashboard__grid">
                    <Gallery elements={this.state.elements}/>
                </main>
            </Fragment>

        );
    }
}

export default LvivDashboard;