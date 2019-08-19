import React from "react";
import Background from "./butterfly.jpg"

function Jumbotron(){

    const style = { 
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

    return (
        <div className="jumbotron jumbotron-fluid" style={style}>
            <div className="container centered">
                <h1 className="display-4">Be the Butterfly!</h1>
                <p className="lead">Click from flower to flower to get points. But don't click the same flower twice!</p>
            </div>
        </div>
    )

}

export default Jumbotron;