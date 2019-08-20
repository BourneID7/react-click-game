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


class ImageGrid extends React.Component {

    //set this.state.flowers to json array; score to 0
    state = {
        flowers,
        score: 0,
        guessMessage: "",
        topScore: 0
    };

    // increase score by 1, reshuffle ImageButtons, display good guess message
    handleGoodGuess = () => {
        this.setState({ score: this.state.score + 1});
        this.setState({ guessMessage: this.state.guessMessage})
        shuffleArray(flowers);
        console.log("score: ", this.state.score);
    };

    // reset score to 0
    handleBadGuess = () => {
        this.setState({ score: this.state.score === 0});
    };

    render() {
        shuffleArray(flowers);

        return (
            <main className="container">
                <div className="row">
                    {this.state.flowers.slice(0, 12).map(flower => (
                        <div className="col-md-3">
                            <ImageButton
                                id={flower.id}
                                key={flower.id}
                                name={flower.name}
                                image={flower.image}
                                handleGoodGuess={this.handleGoodGuess}
                                handleBadGuess={this.handleBadGuess}
                            />
                        </div>
                    ))}
                </div>
            </main>
        )
    }

}

export default ImageGrid;