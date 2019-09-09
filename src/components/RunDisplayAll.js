import React, {Component} from 'react'
import Run from './Run'
import axios from 'axios'

class RunDisplayAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            runsData: []
        }
    }

    componentDidMount() {
        axios.get('/api/speedrun').then(res => {
            this.setState({runsData: res.data})
        })
    }
    
    render() {
        const data = this.state.runsData.map(el => <Run updateFn={this.props.updateFn} key ={el.id} data={el} />)
        return(
            <div className="run-display-all">
                {data}
            </div>
        )
    }
}

export default RunDisplayAll