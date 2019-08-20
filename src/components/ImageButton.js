import React from "react";

function ImageButton(props) {

    const { id, image, name, handleGoodGuess, handleBadGuess } = props;

    return (
        <div className="click-item" key={id} onClick={handleGoodGuess}>
            <img src={image} alt={name} width="150px" height="150px" />
        </div>
    );
}

export default ImageButton;