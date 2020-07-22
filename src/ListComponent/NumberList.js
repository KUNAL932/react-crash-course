import React, { Component } from 'react'
import ListItem from './ListItem';

class NumberList extends Component {
    render() {
        const numbers = this.props.numbers;
        const finalList = numbers.map((number)=>
        <ListItem key={number.toString()} value={number}/>
        )
        return (
            <div>
                <ul>{finalList}</ul>
            </div>
        )
    }
}

export default NumberList
