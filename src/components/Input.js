import React, {Component} from 'react'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'Input state'
        }
    }

    render() {
        return(
            <div className="input">
                Input
            </div>
        )
    }
}


export default Input