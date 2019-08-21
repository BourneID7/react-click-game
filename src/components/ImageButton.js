import React from "react";

function ImageButton(props) {

    const { id, image, name, handleGuess } = props;

    return (
        <div className="click-item" data-id={id} onClick={handleGuess}>
            <img src={image} alt={name} width="150px" height="150px" />
        </div>
    );
}

export default ImageButton;