import React, {Component} from 'react'
import RunDisplay from './RunDisplay';
import WatchList from './WatchList'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: ''
        }
    }

    render() {
        return(
            <div className="main">
                Main
                <RunDisplay />
                <WatchList />
            </div>
        )
    }
}

export default Main