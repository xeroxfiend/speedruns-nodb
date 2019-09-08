import React, {Component} from 'react'
import Run from './Run'
import axios from 'axios'

class RunDisplayAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            runData: []
        }
    }

    componentDidMount() {
        axios.get('/api/speedrun').then(res => {
            this.setState({runData: res.data})
        })
    }

    render() {
        // console.log(this.state.runData)
        const data = this.state.runData.map(el => <Run updateFn={this.props.updateFn} key ={el.id} data={el} />)
        return(
            <div className="run-display-all">
                {data}
            </div>
        )
    }
}

export default RunDisplayAll