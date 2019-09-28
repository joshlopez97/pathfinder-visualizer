import GraphBuilder from "./graph";
import {conf} from '../constants';

export default class GraphSolver extends GraphBuilder {
  constructor(random_graph) {
    super(random_graph.start, random_graph.end, conf.solve_speed);
    this._graph.lines = [];
    this._random_graph = random_graph;
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

  set random_graph(value) {
    this._random_graph = value;
  }

  applyHeuristic(heuristicFunction) {
    for (let node in this.random_graph.nodes) {
      node.heuristic = heuristicFunction(this.random_graph);
      console.log(node.heuristic);
    }
  }
}