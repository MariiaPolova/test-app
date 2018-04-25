import React, { Component } from 'react';
import Gallery from './Mansonry';
import './Dashboard.css';


class LvivDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            elements: [
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height3', id:12,
                    img:"http://dreamstop.com/wp-content/uploads/2013/07/office-dream-meaning.jpeg"},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:13},
                { width :'Dashboard-grid-item-width3', height:'Dashboard-grid-item-height', id:14},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height3', id:15},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:17},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:18},
            ]
        };
    }


    render() {
        return(
            <Gallery elements={this.state.elements}/>
        );
    }
}

export default LvivDashboard;