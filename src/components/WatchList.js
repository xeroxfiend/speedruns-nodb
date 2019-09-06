import React, {Component} from 'react'

class WatchList extends Component {
    constructor() {
        super()
        this.state = {
            placholder: 'Watch list state'
        }
    }

    render() {
        return(
            <div className="watch-list">
                Watch List
            </div>
        )
    }
}

export default WatchList