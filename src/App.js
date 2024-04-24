import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

const App = () => {
  const [scoreFromChild, setScoreFromChild] = useState(0);
  const [topScoreFromChild, setTopScoreFromChild] = useState(0);
  const [messageFromChild, setMessageFromChild] = useState('');

  const myCallback = (scoreData) => {
    setScoreFromChild(scoreData.scoreFromChild);
    setTopScoreFromChild(scoreData.topScoreFromChild);
    setMessageFromChild(scoreData.messageFromChild);
  };

  return (
    <div>
      <Navbar 
        score={scoreFromChild}
        topScore={topScoreFromChild}
        guessMessage={messageFromChild}
      />
      <Jumbotron />
      <ImageGrid callbackFromParent={myCallback} />
    </div>
  )
}

export default App;
