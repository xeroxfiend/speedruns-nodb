import React, {Component} from "react";
import "./App.css";
import Header from './components/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'placeholder state'
    };
  }

  render() {
    return <div className="App">
      <Header />
      <h2>{this.state.placeholder}</h2>
    </div>;

  }
}

export default App;
