import React, { Component } from 'react';

class Message extends Component {
    constructor () {
        super()
        this.state={
        message: "Welcome Investers"
            }}

    newFunc(){
        this.setState({
            message: "Now you are subscribed to our channel"
        })
    }
    render() {
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick = {() =>this.newFunc()}>Subsribe</button>
            {this.props.children} 
             </div>)
    }
}

export default Message;