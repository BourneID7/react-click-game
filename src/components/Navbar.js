import React from "react";

function Navbar (props) {

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark scoreBar centered">
                <a className="navbar-brand" href="#">Flower Flitting</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">Guess: {props.guessMessage}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Score: {props.score} | Top Score: {props.topScore}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;