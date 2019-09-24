import React, {Component} from 'react';
import {conf} from '../constants';
import ReactDOM from 'react-dom';
import Line from "./line";
import Random from "../algorithms/random";
import RandomGraph from "../algorithms/random_graph";
import Node from "./node";
import Dijkstras from "../algorithms/dijkstras";

class GraphButtons extends Component {
  constructor(props) {
    super(props);
  }

  appendSolutionToDOM = () => {
    if (!!this.random_graph) {
      this.pathfinder = new Dijkstras(this.random_graph.graph);
      const explorationHolder = Graph.explorationHolder,
        solutionHolder = Graph.solutionHolder;
      ReactDOM.unmountComponentAtNode(explorationHolder);
      ReactDOM.unmountComponentAtNode(solutionHolder);
      console.log(this.pathfinder.solution);
      ReactDOM.render(<Graph graph={this.pathfinder.graph}/>, explorationHolder);
      ReactDOM.render(<Graph type={"solve"} graph={this.pathfinder.solution.graph}/>, solutionHolder);
    }
  };

  appendGraphToDOM = () => {
    this.random_graph = new RandomGraph(Random.coordinates(), Random.coordinates(), 20);
    let container = Graph.graphHolder;
    ReactDOM.unmountComponentAtNode(container);
    ReactDOM.unmountComponentAtNode(Graph.explorationHolder);
    ReactDOM.unmountComponentAtNode(Graph.solutionHolder);
    ReactDOM.render(<Graph type={"random"} graph={this.random_graph.graph}/>, container);
  };

  render() {
    return (
      <div className="graph-buttons">
        <button onClick={this.appendSolutionToDOM}>Solve</button>
        <button onClick={this.appendGraphToDOM}>New Graph</button>
      </div>
    )
  }
}


class Graph extends Component {
  constructor(props) {
    super(props);
    this.delay = this.props.delay || 0;
  }

  static get graphHolder() {
    return document.getElementById('graph-holder');
  }

  static get explorationHolder() {
    return document.getElementById('exploration-holder');
  }

  static get solutionHolder() {
    return document.getElementById('solution-holder');
  }

  get startEndNodeLabels() {
    return (<div>
      <Node type="start" label="Start" delay={this.props.graph.duration + this.delay} style={{
        top: this.props.graph.start.Y - conf.navHeight,
        left: this.props.graph.start.X,
        animationDelay: `${this.delay + this.props.graph.duration}s`
      }}/>
      <Node type="end" label="End" delay={this.props.graph.duration + this.delay} style={{
        top: this.props.graph.end.Y - conf.navHeight,
        left: this.props.graph.end.X
      }}/>
    </div>);
  }

  render() {
    const type = this.props.type,
      graphRenderTime = this.props.graph.duration;
    return (<div className="graph" id="graph">
      {(this.props.type === "random" ? this.startEndNodeLabels : "")}
      {
        this.props.graph.lines.map((value, index) => {
          return <Line start={value.start}
                       end={value.end}
                       delay={this.delay + value.delay}
                       properties={value.properties}
                       graphRenderTime={graphRenderTime}
                       type={type}
                       key={index}/>;
        })
      }
    </div>);
  }
}

export default GraphButtons;