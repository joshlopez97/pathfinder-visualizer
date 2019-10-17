import GraphBuilder from "./graph";
import {conf} from '../constants';

export default class GraphSolver extends GraphBuilder {
  constructor(random_graph) {
    super(random_graph.start, random_graph.end, conf.solve_speed);
    this._graph.lines = [];
    this._random_graph = random_graph;
    this._delay_map = {};
  }

  get random_graph() {
    return this._random_graph;
  }

  get exploration() {
    return this._graph;
  }

  get solution() {
    return this._solution.graph;
  }

  exploredLine(currNodeName, neighborName) {
    let delay = this._delay_map[currNodeName] || 0;
    let newLine = this.makeLine(this.random_graph.nodes[currNodeName].position, this.random_graph.nodes[neighborName].position, delay);
    this._delay_map[neighborName] = newLine.delay + newLine.properties.duration;
  }

  makeSolutionAnimation(shortest_path) {
    let gb = new GraphBuilder(this.start, this.end, conf.draw_speed);
    let delay = this.exploration.duration;
    let prevLine = {}, currLine = gb.makeLine(this.start, this.random_graph.nodes[shortest_path[0]].position, delay);
    for (let i = 1; i < shortest_path.length; i++) {
      prevLine = Object.assign({}, currLine);
      currLine = gb.makeLine(prevLine.end, this.random_graph.nodes[shortest_path[i]].position, prevLine.delay + prevLine.properties.duration);
    }
    return gb;
  }

  applyHeuristic(heuristicFunction) {
    Object.keys(this.random_graph.nodes).map(nodeName => {
      let node = this.random_graph.nodes[nodeName];
      node.heuristic = heuristicFunction(node, this.random_graph);
    });
  }
}