import React, { Component } from 'react'

class SiblingKey extends Component {
    render() {
        const sideBar = (
            <ul>
             {this.props.posts.map((post)=>
             <li key= {post.id}>
                 {post.title}</li>
             )
            }   
            </ul>
            
        );
        const content = this.props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
        );
        return (
            <div>
                {sideBar}
                <hr/>
                {content}
            </div>
        )
    }
}

export default SiblingKey
