import React, {Component} from 'react'
import Run from './Run'

class RunDisplaySearch extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'RunDisplaySearch state'
        }
    }

    render() {
        return(
            <div className="run-display-search">
                Run Display Search
                <Run />
            </div>
        )
    }
}

export default RunDisplaySearch