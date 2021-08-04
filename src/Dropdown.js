import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {
    render() {
        const { changeEvent, options } = this.props;
        return (
            <div className="container">
                <select className="dropdown" onChange={changeEvent}>
                    {options.map((option, index) => (
                        <option  key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
    }
}export default Dropdown;