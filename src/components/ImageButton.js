import React from "react";

function ImageButton(props) {

    const { id, image, name } = props;

    return (
        <div className="click-item">
            <img src={image} alt={name} key={id} width="150px" height="150px" />
        </div>
    );
}

export default ImageButton;