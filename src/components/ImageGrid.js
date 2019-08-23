import React from "react";
import ImageButton from "./ImageButton";
import flowers from "../flower.json";

// random resort of items in array to change display order of flowers
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
let alreadyClickedArr = [];

class ImageGrid extends React.Component {

    //set this.state.flowers to json array; score to 0
    state = {
        flowers,
        score: 0,
        guessMessage: "",
        topScore: 0,
    };

    // increase score by 1, reshuffle ImageButtons, display good guess message
    handleGoodGuess = () => {
        this.setState({ 
            score: this.state.score + 1, 
            guessMessage: "Good!"
        }, () => {
            shuffleArray(flowers);
            console.log("score: ", this.state.score);
            console.log("Guess: ", this.state.guessMessage);

            if (this.state.score >= this.state.topScore) {
                this.setState({ topScore: this.state.score}, () => {
                    console.log("Top score: ", this.state.topScore);
                    this.sendData();
                });
            };
        });
    };

    // reset score to 0, display game over message
    handleBadGuess = () => {
        this.setState({ 
            score: 0,
            guessMessage: "Bad guess! Game over!",
        }, () => {
            alreadyClickedArr = [];
            this.sendData();
            console.log("score: ", this.state.score);
            console.log("top score: ", this.state.topScore);
            console.log("Guess: ", this.state.guessMessage);
        });
    };

    //pass score info back to parent
    sendData = () => {
        const scoreData = {
            scoreFromChild: this.state.score,
            topScoreFromChild: this.state.topScore,
            messageFromChild: this.state.guessMessage
        }
        this.props.callbackFromParent(scoreData);
    };    

    // determine whether guess is good or bad & run appropriate function
    handleGuess = (id) => {
        if (alreadyClickedArr.indexOf(id) === -1) {
            this.handleGoodGuess();
            alreadyClickedArr.push(id);
            console.log("button id clicked: ", id);
            console.log("already clicked: ", alreadyClickedArr);

        } else {
            this.handleBadGuess();
            console.log("button id clicked: ", id);
            console.log("already clicked: ", alreadyClickedArr);
        };
    };
        
    render() {
        shuffleArray(flowers);

        return (
            <main className="container">
                <div className="row">
                    {this.state.flowers.slice(0, 12).map(flower => (
                        <div className="col-md-3" key={flower.id} onClick={() => this.handleGuess(flower.id)}>
                            <ImageButton
                                id={flower.id}
                                name={flower.name}
                                image={flower.image}
                            />
                        </div>
                    ))}
                </div>
            </main>
        );
    };
}

export default ImageGrid;