import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        const { horns } = this.props;
        return (
            <>
                {horns.map((item) => {
                    const {name, url} = item;
                    return <ImageItem key={name} name={name} url={url}/>;
                })}
            </>
        );
    }
}

export default ImageList;