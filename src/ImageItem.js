import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        return (
            <p>
                {this.props.image.name}
                <img
                    alt={this.props.image.name}
                    width="200"
                    src={this.props.image.url}
                />
            </p>
        );
    }
}

export default ImageItem;