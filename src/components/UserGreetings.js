import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>Hello Kunal</h1>
                </div>
            )
        }
        else{
            return (
                <div>
                   <h1>Hello guest</h1> 
                </div>
            )
        }
        
    }
}

export default UserGreetings;
