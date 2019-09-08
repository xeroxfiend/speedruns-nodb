import React, {Component} from "react";
import axios from "axios";
import WLRun from "./WLRun";

class WatchList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("/api/speedrun/watch-list").then(res => {
      this.props.updateFn(res.data);
    });
  }

  render() {
    const watchListRun = this.props.watchList.map(el => (
      <WLRun key={el.id} data={el} />
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
