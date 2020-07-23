import React, { Component } from 'react'

class TextAreaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             text : "This Place is for you"
        };
        this.inputHandling = this.inputHandling.bind(this);
        this.submitHandling = this.submitHandling.bind(this)
    }

    inputHandling(event){
        this.setState({text: event.target.text})
    };
    submitHandling(event){
        alert("you submitted this text : " + this.state.text );
        event.preventDefault();
    };

    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandling}>
                    <label>
                    Enter Your skills:
                    <textarea text={this.state.text} onChange={this.inputHandling} />   
                    </label>
                    <input type = "submit" name="submit" />
                </form>
            </div>
        )
    }
}

export default TextAreaForm
