import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <h1>Available shoes:</h1>
        <div>
          {this.state.shoes.map((s) => {
            return (
              <ul>
                <li>Size: {s.size}</li>
                <li>Brand: {s.brand_name}</li>
                <li>Manufacturer: {s.manufacturer}</li>
                <li>Color: {s.color}</li>
                <li>Material: {s.material}</li>
                <li>Type: {s.shoe_type}</li>
                <li>Fasten Type:{s.fasten_type}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
