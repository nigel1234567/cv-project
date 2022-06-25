import React, { Component } from "react";
import Header from './components/Header'
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <Header/>
        <Resume/>
      </div>
    )
  }
}

export default App;
