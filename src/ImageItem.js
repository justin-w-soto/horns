import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        const { keyword, url } = this.props;
        return (
            <p>
                 {keyword}
                <img alt={keyword} width="200" src={url} />
            </p>
        );
    }
}

export default ImageItem;