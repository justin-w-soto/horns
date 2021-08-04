import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        return (
            <p className="Stuff">
                {this.props.image.keyword}
                <img
                    alt={this.props.image.keyword}
                    width="300"
                    src={this.props.image.url}
                />
                <>

                {this.props.image.description}
                </>
            </p>
        );
    }
}

export default ImageItem;