import React, {Component}  from 'react';
import './Tile.css';
import { Resizable } from 'react-resizable';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {width: props.width,
            height: props.height,
            id: 0};
        }

        onResize =(event, {element, size}) =>{
        this.setState({
            width: size.width,
            height: size.height,
            });
        };

        // for web page
        handleMouseUp =(event)=> {
            this.props.handleUp();
        };

        // for mobile
        handleTouchEnd =(event)=> {
            this.props.handleUp();
        };

    render() {
        return (
            <Resizable className='Dashboard-b-grid__item'
                       width={this.state.width}
                       height={this.state.height}
                       onResize={this.onResize}
                       onMouseUp={this.handleMouseUp}
                       onTouchEnd={this.handleTouchEnd}>
                <div className='Dashboard-b-grid__item'
                     style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>

                    <div className="Tile-b-grid__content-title">
                        <h3>Office {this.props.office}</h3>
                        <h4 className="Dashboard-b-dashboard__grid-item">Camera #{this.props.id}</h4>
                    </div>
                </div>
            </Resizable>
        );
    }
}




export default Tile;