import React, {Component} from 'react'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'Input state'
        }
    }

    render() {
        return(
            <div className="input">
                <input placeholder='Search by runner' className="runner"/>
                <input placeholder='Search by game' className="game"/>
                <button className="search">Search!</button>
            </div>
        )
    }
}


export default Input