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
                Main
                <RunDisplayAll />
                <Input />
                <RunDisplaySearch />
                <WatchList />
            </div>
        )
    }
}

export default Main