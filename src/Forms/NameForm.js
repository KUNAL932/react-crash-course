import React, { Component } from 'react'

class NameForm extends Component {
    render() {
        return (
            <form>
                <label>
                    name: <input type= "text" name="name"/>
                </label>
                <input type="submit" name="submit"/>
            </form>
        )
    }
}

export default NameForm
