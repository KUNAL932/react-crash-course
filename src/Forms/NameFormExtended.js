import React, { Component } from 'react'

class NameFormExtended extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        alert("Submitted Name is " + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <label>
                      Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  </label>
                    <input type="submit" value="submit"/>
                </form>  
            </div>
        )
    }
}

export default NameFormExtended
