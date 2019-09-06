import React, {Component} from 'react'
import Run from './Run'
import axios from 'axios'

class RunDisplayAll extends Component {
    constructor() {
        super()
        this.state = {
            runData: []
        }
    }

    componentDidMount() {
        axios.get('/api/speedrun').then(res => {
            this.setState({runData: res.data.data})
        })
    }

    render() {
        const data = this.state.runData.map(el => <Run data={el} />)
        return(
            <div className="run-display-all">
                {data}
            </div>
        )
    }
}

export default RunDisplayAll