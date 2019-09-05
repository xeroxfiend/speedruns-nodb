import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'placeholder state'
    };
  }

  render() {
    return <div className="App">
      <h1>HELLO WORLD</h1>
      <h2>{this.state.placeholder}</h2>
    </div>;

  }
}

export default App;
