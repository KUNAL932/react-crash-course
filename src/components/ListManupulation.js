import React, { Component } from 'react'

class ListManupulation extends Component {
    

    render() {
        const numbers = this.props.numbers;
        const numberList = numbers.map((number)=> <li>{number}</li>)
        return (
            <div>
                <ul>{numberList}</ul>
            </div>
        )
    }
}

export default ListManupulation
