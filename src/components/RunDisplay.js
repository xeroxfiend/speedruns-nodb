import React, {Component} from 'react'
import Input from './Input'

class RunDisplay extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'RunDisplay state'
        }
    }

    render() {
        return(
            <div className="run-display">
                RunDisplay
                <Input />
            </div>
        )
    }
}

export default RunDisplay