import React, { Component } from 'react'

class UserList extends Component {
    
    render() {
        const alist = [
            {name: "Bruce Wayne",id: 83827,age: 35,},
            {name: "Diana Prince",id:88888,age:150},
            {name: "Clark Kent",id: 9999,age:29},

        ];
        const namelist = alist.map(alist => <h1> I am {alist.name} and my age is {alist.age} </h1>)
        return (
            <div>
               {namelist}
            </div>
        )
    }
}

export default UserList;
