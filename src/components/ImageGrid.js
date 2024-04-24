import { useState, useEffect } from 'react';
import ImageButton from "./ImageButton";
import flowers from "../flower.json";

// random resort of items in array to change display order of flowers
const shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const ImageGrid = ({ callbackFromParent }) => {
  const [arrayShuffled, setArrayShuffled] = useState(shuffleArray(flowers));
  const [score, setScore] = useState(0);
  const [guessMessage, setGuessMessage] = useState('');
  const [topScore, setTopScore] = useState(0);
  const [guessedIds, setGuessedIds] = useState([]);

  const handleGuess = (id) => {
    if (guessedIds.includes(id)) {
      setScore(0);
      setGuessMessage('Wrong! Game over!');
      setGuessedIds([]);
    } else {
      setScore(score + 1);
      setGuessMessage('Good!');
      setGuessedIds([...guessedIds, id]);

      // use score + 1 because this runs before score gets updated
      if (score >= topScore) {
        setTopScore(score + 1);
      }
    }
    setArrayShuffled(shuffleArray(flowers));
  }
  
  useEffect(() => {
    sendData();
  }, [score])

  const sendData = () => {
    const scoreData = {
      scoreFromChild: score,
      topScoreFromChild: topScore,
      messageFromChild: guessMessage,
    }
    callbackFromParent(scoreData)
  }

  return (
    <main className="container">
      <div className="row">
        {arrayShuffled.slice(0,12).map(flower => (
          <div 
            className="col-lg-3 col-md-4 col-sm-6" 
            key={flower.id} 
            onClick={() => handleGuess(flower.id)}
          >
            <ImageButton 
              id={flower.id}
              name={flower.name}
              image={flower.image}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default ImageGrid