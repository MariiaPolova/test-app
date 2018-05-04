import React, {Component, Fragment} from 'react';
import Gallery from './Mansonry';
import './Dashboard.css';
import SideBar from '../SideBar/SideBar';
import './Dashboard.css';

class VinnytsiaDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            office: 'Vinnytsia',
            elements: [
                { width :300, height:600, id:2},
                { width :300, height:300, id:3},
                { width :300, height:450, id:4},
                { width :300, height:600, id:5},
                { width :300, height:450, id:6},
                { width :300, height:300, id:7},
                { width :300, height:300, id:8},
            ]
        };
    }


    render() {
        return(
            <Fragment>
                <SideBar/>
                <main className="Dashboard-b-dashboard__grid">
                    <Gallery office={this.state.office} elements={this.state.elements}/>
                </main>
            </Fragment>
        );
    }
}

export default VinnytsiaDashboard;