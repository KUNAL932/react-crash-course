import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() =>this.props.name()}>Parent Interaction</button>
                
            </div>
        )
    }
}

export default ChildComponent
