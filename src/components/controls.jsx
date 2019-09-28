import React, {Component} from 'react';
import {conf} from '../constants';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <AlgorithmChooser setAlgorithm={this.props.setAlgorithm} algorithms={conf.algorithms}/>
      </div>
    );
  }
}

class AlgorithmChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {choice: conf.startingAlgorithm, active: false}
  }

  showOptions() {
    this.setState(state => (Object.assign(state, {
      active: !state.active
    })));
  }

  choose(algorithm) {
    this.setState({
      active: false,
      choice: algorithm
    });
    this.props.setAlgorithm(algorithm);
  }

  render() {
    return (
      <div className="algorithm-dropdown">
        <div onClick={() => this.showOptions()} className="algorithm-chooser button">
          <span>{this.state.choice.label}</span>
          <div className="dropdown-caret-holder">
            <span className={`dropdown-caret${!this.state.active? "" : " flipped"}`}>&#9660;</span>
          </div>
        </div>
        <div className={`algorithm-options${this.state.active? "" : " hidden"}`}>
          {Object.values(this.props.algorithms).map((algorithm, index) => {
            return <div onClick={() => this.choose(algorithm)} className="algorithm-option button" key={index}>{algorithm.label}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Controls;