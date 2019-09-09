import React, {Component} from "react";
import RunDisplayAll from "./RunDisplayAll";
import RunDisplaySearch from "./RunDisplaySearch";
import WatchList from "./WatchList";
// import Input from "./Input";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      watchList: []
    };

    this.updateWatchList = this.updateWatchList.bind(this);
  }

  updateWatchList(list) {
    this.setState({watchList: []});
    this.setState({watchList: list});
  }

  render() {
    return (
      <div className="main">
        <h2 className="recent">Recent runs</h2>
        <RunDisplayAll updateFn={this.updateWatchList} />
        <h2 className="search">Search for runs</h2>
        <RunDisplaySearch
          input={this.state.input}
          clicked={this.state.buttonClicked}
          updateFn={this.updateWatchList}
        />
        <h2 className="watch-list-title">Watch List</h2>
        <WatchList
          updateFn={this.updateWatchList}
          watchList={this.state.watchList}
        />
      </div>
    );
  }
}

export default Main;
