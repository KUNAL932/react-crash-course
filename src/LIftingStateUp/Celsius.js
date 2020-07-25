import React, { Component } from 'react'

class Celsius extends Component {
    render() {
        if (this.props.celsius) {
            return (
                <p>The water would boil at this temperature.</p>
                )
        }
        return (<p> The water would not boil at this temperature.</p>)
        
    }
}

export default Celcius
