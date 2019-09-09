import React, {Component} from "react";
import axios from "axios";
import WLRun from "./WLRun";

class WatchList extends Component {
  
  componentDidMount() {
    axios.get("/api/speedrun/watch-list").then(res => {
      this.props.updateFn(res.data);
    });
  }

  render() {
    const watchListRun = this.props.watchList.map(el => (
      <WLRun updateFn={this.props.updateFn} key={el.id} data={el} />
    ));
    return (
      <div className="watch-list">
        <div className="run-container">
          {watchListRun}        
        </div>
      </div>
    );
  }
}

export default WatchList;
