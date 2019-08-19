import React from "react";
import ImageButton from "./ImageButton";
import flowers from "../flower.json";

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

    //set this.state.flowers to json array
    state = {
        flowers
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
                                onClick={() => shuffleArray(flowers)}
                            />
                        </div>
                    ))}
                </div>
            </main>
        )
    }

}

export default ImageGrid;