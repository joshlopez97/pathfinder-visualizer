import {conf} from "../constants";
import GraphSolver from "./solver";
import Heuristics from "./heuristic";
import Dijkstras from "./dijkstras";

export default class AStar extends GraphSolver {
  constructor(random_graph) {
    super(random_graph.start, random_graph.end, conf.solve_speed);
    this._solution = this.solve();
  }

  solve() {
    this.applyHeuristic(Heuristics.distanceToGoal);
    return new Dijkstras(this.random_graph).solve();
  }
}