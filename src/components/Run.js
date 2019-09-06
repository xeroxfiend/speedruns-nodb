import React, {Component} from 'react'

class Run extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: ''
        }
    }

    render() {
        // console.log(this.props.data.date)
        return(
            <div className="run">
                {this.props.data.date}                
            </div>
        )
    }
}

export default Run