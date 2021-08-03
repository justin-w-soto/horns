import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        return (
            <p>
                {this.props.image.keyword}
                <img
                    alt={this.props.image.keyword}
                    width="200"
                    src={this.props.image.url}
                />
            </p>
        );
    }
}

export default ImageItem;