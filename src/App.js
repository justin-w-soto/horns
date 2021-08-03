import React, { Component } from 'react';
import './App.css';
import images from './data.js'
import ImageList from './ImageList.js';

class App extends Component {
  state = {
    type: 'All',
};
handleChange = (event) => {
    this.setState({ type: event.target.value });
};
render() {
    const filteredImg = images.filter(
        (horn) => this.state.type === 'All' || horn.type === this.state.type
    );

    return (
        <div className="App">
            <h1>Horned Beasts</h1>
            <select onChange={this.handleChange}>
                <option keyword="All">All</option>
                <option keyword="narwhal">Narwhal</option>
                <option keyword="rhino">Rhino</option>
                <option keyword="unicorn">Unicorn</option>
                <option keyword="unilego">Unilego</option>
                <option keyword="narwhal">Narwhal</option>
                <option keyword="narwhal">Narwhal</option>
                <option keyword="rhino">Rhino</option>
                <option keyword="triceratops">Triceratops</option>
                <option keyword="narwhal">Narwhal</option>
                <option keyword="rhino">Rhino</option>
                <option keyword="unicorn">Unicorn</option>
                <option keyword="markhor">Markhor</option>
                <option keyword="markhor">Markhor</option>
                <option keyword="mouflon">Mouflon</option>
                <option keyword="addax">Addax</option>
                <option keyword="mouflon">Mouflon</option>
                <option keyword="chameleon">Chameleon</option>
                <option keyword="chameleon">Chameleon</option>
                <option keyword="lizard">Lizard</option>
                <option keyword="dragon">Dragon</option>
            </select>
            <ImageList
                hornbooger={filteredImg}
            />
        </div>
    );
}
}

export default App;


