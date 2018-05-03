import React from 'react';
import Masonry, {PerformLayout} from 'react-masonry-component';
import Tile from "./Tile/Tile";
import "./Dashboard.css"

const masonryOptions = {
    percentPosition: true,
    itemSelector: '.Dashboard-b-grid__item',
    columnWidth: '.Dashboard-b-grid__sizer',
    gutter: 10,
};

const Context = React.createContext();

class Gallery extends React.Component {
    constructor(props){
    super(props);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('this.masonry');
    //     console.log(this.masonry);
    // }

    render() {
        const listItems = this.props.elements.map((element) =>
            <Tile key={element.id}
                  width={element.width}
                  height={element.height}
                  id={element.id}
                  img={element.img}
                  />);

        return (
            <Masonry
                className={'Dashboard-b-dashboard__grid masonry'}
                options={masonryOptions} // inited at the top
                ref={c => {this.masonry =  c}}
            >
                <Context.Provider value={'someparam'}>
                    <div className="Dashboard-b-grid__sizer"></div>
                    {listItems}
                </Context.Provider>
            </Masonry>
        );
    }
}
export const MasonryConsumer = Context.Consumer;
export default Gallery;