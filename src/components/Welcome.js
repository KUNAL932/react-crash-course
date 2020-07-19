import React, { Component } from 'react';

class Welcome extends Component {
    
    render() {
        const {name,officeBoy} = this.props
        return (<div><h1>
            I went to the office to meet  my boss {name} and what my
             partner said about {officeBoy} 
             was amazing
             </h1>
            {this.props.children} 
             </div>)
    }
}

export default Welcome;