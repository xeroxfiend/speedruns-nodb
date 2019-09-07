import React, {Component} from 'react'
import RunDisplayAll from './RunDisplayAll';
import RunDisplaySearch from './RunDisplaySearch'
import WatchList from './WatchList'
import Input from './Input'

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
                <h2 className="recent">Recent runs</h2>
                <RunDisplayAll />
                <Input />
                <RunDisplaySearch />
                <h2 className="watch-list-title">Watch List</h2>
                <WatchList />
            </div>
        )
    }
}

export default Main