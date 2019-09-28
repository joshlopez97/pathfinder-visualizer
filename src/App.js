import React, {Component} from 'react';
import './App.css';
import Board from "./components/board";
import GraphButtons from "./components/graph";
import Controls from "./components/controls";
import Icon from "./components/icon";
import {conf} from "./constants";


export default class App extends Component {
  state = {renderState: "", algorithm: conf.startingAlgorithm.name};

  setRenderState = function(renderState) {
    this.setState(state => (Object.assign(state, {
      renderState: renderState
    })));
  }.bind(this);

  setAlgorithm = function(algorithm) {
    this.setState(state => (Object.assign(state, {
      algorithm: algorithm.name
    })));
  }.bind(this);

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div className="nav-items">
            <GraphButtons algorithm={this.state.algorithm} setRenderState={this.setRenderState}/>
            <Controls setAlgorithm={this.setAlgorithm}/>
          </div>
          <Icon renderState={this.state.renderState}/>
        </div>
        <div className="graph-holder" id="graph-holder"/>
        <div className="graph-holder" id="exploration-holder"/>
        <div className="graph-holder" id="solution-holder"/>
        <Board/>
      </div>
    );
  }
}
