import React from 'react';
import Masonry from 'react-masonry-component';
import Tile from "./Tile/Tile";
import "./Dashboard.css"

const masonryOptions = {
    percentPosition: true,
    itemSelector: '.Dashboard-b-grid__item',
    columnWidth: '.Dashboard-b-grid__sizer',
    gutter: 10,
};

class Gallery extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        masonryState : null
        }
    }

    componentDidMount() {
            this.setState = ({masonryState : this.masonry});
            console.log('this.state.masonryState');
            console.log(this.state.masonryState);
            console.log(this.masonry);
    }

    render() {
        const listItems = this.props.elements.map((element) =>
            <Tile key={element.id}
                  width={element.width}
                  height={element.height}
                  id={element.id}
                  img={element.img}
                  masonryState ={this.state.masonryState}
                  />);

        return (
            <Masonry
                className={'Dashboard-b-dashboard__grid masonry'}
                options={masonryOptions} // inited at the top
                ref={c => {this.masonry =  c}}
            >
                <div className="Dashboard-b-grid__sizer"></div>
                {listItems}
            </Masonry>
        );
    }
}

export default Gallery;