import React, {Component} from 'react'
import axios from 'axios'

class WatchList extends Component {
    constructor() {
        super()
        this.state = {
            placholder: 'Watch list state'
        }
    }
    
    componentDidMount() {
        axios.get('/api/speedrun/watch-list').then(res => {
            const watchList = res
        })
    }

    render() {
        return(
            <div className="watch-list">
                {this.watchList}
            </div>
        )
    }
}

export default WatchList