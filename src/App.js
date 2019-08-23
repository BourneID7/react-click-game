import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar 
          score={this.props.score}
          topScore={this.props.topScore}
          guessMessage={this.props.guessMessage}
        />
        <Jumbotron />
        <ImageGrid />
      </div>
    )
  }
}

export default App;
