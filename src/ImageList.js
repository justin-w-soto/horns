import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        return (
            <>
                {this.props.hornbooger.map((item) => {
                    return <ImageItem key={item.name} image={item} />;
                })}
            </>
        );
    }
}

export default ImageList;