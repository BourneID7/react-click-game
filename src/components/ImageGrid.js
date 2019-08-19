import React from "react";
import ImageButton from "./ImageButton";
import flowers from "../flower.json";

class ImageGrid extends React.Component {

    //set this.state.flowers to json array
    state = {
        flowers
    };

    render() {
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
                            />
                        </div>
                    ))}
                </div>
            </main>
        )
    }

}

export default ImageGrid;