import React, {Component} from 'react';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <AlgorithmChooser algorithms={["Dijkstra's"]}/>
      </div>
    );
  }
}

class AlgorithmChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {choice: props.algorithms[0], active: false}
  }

  showOptions() {
    this.setState(state => (Object.assign(state, {
      active: !state.active
    })));
  }

  render() {
    return (
      <div className="algorithm-dropdown">
        <div onClick={() => this.showOptions()} className="algorithm-chooser button">
          <span>{this.state.choice}</span>
          <span className={`dropdown-caret${!this.state.active? "" : " flipped"}`}>&#9660;</span>
        </div>
        <div className={`algorithm-options${this.state.active? "" : " hidden"}`}>
          {this.props.algorithms.map((value, index) => {
            return <div className="algorithm-option button" key={index}>{value}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Controls;