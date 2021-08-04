import React, { Component } from 'react';
import './App.css';
import images from './data.js'
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

class App extends Component {
  state = {
    keyword: 'All',
    horns: 'All',
};
options = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon' ];
hornsOptions = ['All', '1', '2', '3', '100'];

handleChange = (event) => {
    this.setState({ keyword: event.target.value });
};

handleHornsChange = (event) => {
    const numberOfHorns = event.target.value;
    this.setState({ horns: numberOfHorns });
}

render() {
    const filteredImg = images.filter(
        (horn) => this.state.keyword === 'All' || horn.keyword === this.state.keyword
    );
    console.log(this.state)
    console.log(filteredImg)
    const filteredHorns = filteredImg.filter(
        (horn) => this.state.horns === 'All' || horn.horns === Number(this.state.horns)
    );

    return (
        <div className="App">
            <h1>Horned Beasts</h1>
                <Dropdown
                    options={this.options}
                    changeEvent={this.handleChange}
                />
                <Dropdown  options={this.hornsOptions}
                    changeEvent={this.handleHornsChange}
                />
            
                <ImageList
                horns={filteredHorns}
                />
        </div>
    );
  }
}

export default App;



