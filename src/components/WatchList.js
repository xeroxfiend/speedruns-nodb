import React, {Component} from "react";
import axios from "axios";
import Run from "./Run";

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
      <Run key={el.id} data={el} />
    ));
    return (
      <div className="watch-list">
        <div className="run-container">
          {watchListRun}
          <button className="watched">Watched?</button>
          <button className="remove">Remove</button>
        </div>
      </div>
    );
  }
}

export default WatchList;
