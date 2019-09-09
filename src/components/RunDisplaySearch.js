import React, {Component} from "react";
import RunSearch from "./RunSearch";
import axios from "axios";

class RunDisplaySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runsData: [],
      inputRunner: '',
      inputGame: ''
    };
  }

  handleSearchRunner() {
    axios.get(`/api/speedrun/runner/${this.state.inputRunner}`).then(res => {
        this.setState({runsData: res.data});
      }).catch(() => alert('oh boy'))
  }

  handleSearchGame() {
    axios.get(`/api/speedrun/game?game=${this.state.inputGame}`).then(res => {
        this.setState({runsData: res.data});
      }).catch(() => alert('uh oh'))
  }  
  
  handleChangeRunner(e) {
    this.setState({inputRunner: e});
  }

  handleChangeGame(e) {
    this.setState({inputGame: e});
  }


  render() {
    const data = this.state.runsData.map(el => (
      <RunSearch updateFn={this.props.updateFn} key={el.id} data={el} />
    ));
    return (
      <div className="run-display-search">
        <div className="input">
          <input
            onChange={e => this.handleChangeRunner(e.target.value)}
            placeholder="Search by runner"
            className="runner"
          />
          <button onClick={() => this.handleSearchRunner()} className="search-runner">Search</button>
          <input
            onChange={e => this.handleChangeGame(e.target.value)}
            placeholder="Search by game"
            className="game"
          />
          <button onClick={() => this.handleSearchGame()} className="search-game">
            Search
          </button>
        </div>
        <div className="data">
        {data}
        </div>
      </div>
    );
  }
}

export default RunDisplaySearch;
