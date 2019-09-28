import GraphBuilder from "./graph";
import {conf} from "../constants";

export default class AStar extends GraphBuilder {
  constructor(random_graph) {
    super(random_graph.start, random_graph.end, conf.solve_speed);
    this._graph.lines = [];
    this._random_graph = random_graph;
    this._solution = this.solve();
  }

  solve() {

  }
}