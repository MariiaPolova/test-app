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
    }

    render() {
        const listItems = this.props.elements.map((element) =>
            <Tile key={element.id}
                  width={element.width}
                  height={element.height}
                  id={element.id}
                  img={element.img}
                  />);


            console.log(listItems);


        return (
            <Masonry
                className={'Dashboard-b-dashboard__grid masonry'}
                options={masonryOptions}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                <div className="Dashboard-b-grid__sizer"></div>
                {listItems}
            </Masonry>
        );
    }
}

export default Gallery;