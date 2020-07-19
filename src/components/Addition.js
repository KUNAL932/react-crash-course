import React, { Component } from 'react';

class Addition extends Component {
    constructor(){
        super()
            this.state= {
                number: 1
            
        }
    }

    incrementFunc(){
        this.setState({
            number : this.state.number + 1
        },() =>{
            console.log("value of number is : ",this.state.number)
        }) 
    }
    render() {
        return (
            <div>
                <div><h1>Count = {this.state.number}</h1></div>
                <div><button onClick={() => this.incrementFunc()}>Increament</button></div>
            </div>
        )
    }
}

export default Addition;