import React, {Component}  from 'react';
import './Tile.css';
import { Menu, Edit2 } from 'react-feather';
import { Resizable } from 'react-resizable';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {width: props.width,
            height: props.height,
            id: 0,
            masonryState: props.masonryState};
        }

        onResize =(event, {element, size}) =>{
        this.setState({
            width: size.width,
            height: size.height,
            });
        };

        handleMouseUp =(event)=> {

           // this.masonry.performLayout();
           console.log(this.masonryState);
        };

    render() {
        const content={
            background: 'url(' + this.props.img + ')'
        };

        console.log(this.state.height, this.state.width);

        return (
            <Resizable className='Dashboard-b-grid__item'
                       width={this.state.width}
                       height={this.state.height}
                       onResize={this.onResize}
                       onMouseUp={this.handleMouseUp}>
                <div className='Dashboard-b-grid__item'
                     style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    <div className="Tile-b-grid__left-icon">
                        <a href="">
                            <Menu />
                        </a>
                    </div>

                    <div className="Tile-b-grid__right-icon">
                        <a href="">
                            <Edit2 />
                        </a>
                    </div>

                    <div className="Tile-b-grid__content-title">
                        <h3>Camera #{this.props.id}</h3>
                    </div>
                </div>
            </Resizable>

        );
    }
}




export default Tile;