import React from 'react';
import React, { Component } from 'react';

class Maths extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num1: Math.floor(Math.random * 10),
            num2: Math.floor(Math.random * 10),
            sum: null
        };
        this.handleChange=this.handleChange.bind(this);
        this.calculateSum=this.calculateSum.bind(this);
    }

    handleChange(event) {
        this.setState({
            sum: event.target.value
        })
    }

    calculateSum(){
        this.setState({
            sum: this.state.num1 + this.state.num2
        });
    }

    render(){
        return(
            <div>
            <input type="number" value={this.state.num1} />
            <input type="number" value={this.state.num2} />
            <input type="number" value={this.state.sum} onChange={this.handleChange} />
            <button onClick={this.calculateSum}>Calculate</button>
            </div>
        );
    }
}

ReactDom.render(<Maths />,document.getElementById("root"))