import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

class App extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      scoreFromChild: null, 
      topScoreFromChild: null, 
      messageFromChild: null 
    };
  };

  myCallback = (scoreData) => {
    this.setState({ 
      scoreFromChild: scoreData.scoreFromChild,
      topScoreFromChild: scoreData.topScoreFromChild,
      messageFromChild: scoreData.messageFromChild
      });
  };

  render() {
    return (
      <div>
        <Navbar 
          callbackFromParent={this.myCallback}
          score={this.state.scoreFromChild}
          topScore={this.state.topScoreFromChild}
          guessMessage={this.state.messageFromChild}
        />
        <Jumbotron />
        <ImageGrid />
      </div>
    )
  }
}

export default App;
