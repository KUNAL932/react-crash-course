import React, { Component } from 'react'

// const alist = ['Rambo','Rambo2','Rambo3'];

class UserList extends Component {
    
    render() {
        const alist = ['Rambo','Rambo2','Rambo3'];
        return (
            <div>
                <h1>{alist[0]}</h1>
                <h1>{alist[1]}</h1>
                <h1>{alist[2]}</h1>
            </div>
        )
    }
}

export default UserList;
