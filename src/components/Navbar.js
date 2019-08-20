import React from "react";

function Navbar (props) {

    return (
        <div className="container-fluid">
            <div className="scoreBar">
                <div className="row">
                    <div className="col-md-4">
                        <p className="scoreText"><strong>Flower Flitting</strong></p>
                    </div>
                    <div className="col-md-4">
                        <p className="scoreText">Guess: {props.guessMessage}</p>
                    </div>
                    <div className="col-md-4">
                        <p className="scoreText">Score: {props.score}| Top Score: {props.topScore}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;