import React, {Component}  from 'react';
import './Tile.css';
import PropTypes from 'prop-types';
import { Menu, Edit2 } from 'react-feather';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {width: '', height: '', id: 0, img: ''};
    }

    resizeTile(event){
        this.setState({
            width: event.width,
            height: event.height,
        });
    };

    render() {
        const content={
            background: 'url(' + this.props.img + ')'
        };

        return (
            <div className={'Dashboard-b-grid__item '+ this.props.width + ' ' + this.props.height}>

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

                <div className="Tile-b-grid__content">
                    <div className="Tile-b-grid__content-img" style={content}></div>
                    <div className="Tile-b-grid__content-title">
                        <h3>Camera #{this.props.id}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

Tile.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    id: PropTypes.number
};

Tile.defaultProps = {
    width: 'Dashboard-grid-item-width',
    height: 'Dashboard-grid-item-height',
    id:0
};

export default Tile;