import React, {Component} from 'react'
import Run from './Run'

class RunDisplayAll extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'RunDisplayAll state'
        }
    }

    render() {
        return(
            <div className="run-display-all">
                Run Display All
                <Run />
            </div>
        )
    }
}

export default RunDisplayAll