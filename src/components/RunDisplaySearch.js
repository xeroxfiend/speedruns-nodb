import React, {Component} from 'react'
import RunSearch from './RunSearch'
// import axios from 'axios'

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
                <RunSearch />
            </div>
        )
    }
}

export default RunDisplaySearch