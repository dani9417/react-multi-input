import React, { Component } from "react";
import "./App.css";
import MultiInput from "./MultiInput";
import shortid from "shortid";

class App extends Component {
  state = {
    items: ["first", "second", "third"],
    multiInputID: shortid.generate()
  };

  onChange = items => this.setState({ items });

  simulatePropChange = () => {
    const itemsLength = ~~(Math.random() * 5) + 1;

    const items = Array(itemsLength)
      .fill(null)
      .map((x, i) => `test string ${i}`);

    this.setState({ items, multiInputID: shortid.generate() });
  };

  render() {
    const { multiInputID, items } = this.state;
    return (
      <div className="App">
        <MultiInput key={multiInputID} items={items} onChange={this.onChange} />

        <button onClick={this.simulatePropChange} style={{ marginTop: "2rem" }}>
          Change state in parent
        </button>
      </div>
    );
  }
}

export default App;
