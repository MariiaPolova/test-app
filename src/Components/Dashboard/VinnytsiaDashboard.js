import React, { Component } from 'react';
import Gallery from './Mansonry';
import './Dashboard.css';

class VinnytsiaDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            elements: [
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:2,
                    img:"http://dreamstop.com/wp-content/uploads/2013/07/office-dream-meaning.jpeg"},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:3},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:4},
                { width :'Dashboard-grid-item-width3', height:'Dashboard-grid-item-height3', id:5},
                { width :'Dashboard-grid-item-width2', height:'Dashboard-grid-item-height', id:7},
                { width :'Dashboard-grid-item-width', height:'Dashboard-grid-item-height', id:8},
            ]
        };
    }


    render() {
        return(
            <Gallery elements={this.state.elements}/>
        );
    }
}

export default VinnytsiaDashboard;