import React, { Component } from 'react';
import './App.css';
import images from './data.js'
import ImageList from './ImageList.js';

class App extends Component {
  state = {
    keyword: 'All',
};
handleChange = (event) => {
    this.setState({ keyword: event.target.value });
    // console.log(event.target.value);
};
render() {
    const filteredImg = images.filter(
        (horn) => this.state.keyword === 'All' || horn.keyword === this.state.keyword
    );

    return (
        <div className="App">
            <h1>Horned Beasts</h1>
            <select onChange={this.handleChange}>
            <option value="all">ALL</option>
            <option value= "narwhal">Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>unilego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='chameleon'>Chameleon</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>

            </select>
            <ImageList
                hornbooger={filteredImg}
            />
        </div>
    );
  }
}

export default App;


