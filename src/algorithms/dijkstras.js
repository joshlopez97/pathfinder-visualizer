import TinyQueue from 'tinyqueue';
import GraphSolver from "./solver";

export default class Dijkstras extends GraphSolver {
  constructor(random_graph) {
    super(random_graph);
    this._solution = this.solve();
  }

  solve() {
    let distances = {};
    let paths = {};
    let pq = new TinyQueue([], (node1, node2) => {
      return node1.value - node2.value;
    });

    const startNode = this.random_graph.start.name;
    distances[startNode] = 0;
    paths[startNode] = [];
    pq.push({name: startNode, value: 0});
    Object.keys(this.random_graph.nodes).forEach(node => {
      if (node !== startNode) {
        distances[node] = Infinity;
        paths[node] = [];
      }
    });
    while (pq.length > 0) {
      let currNode = pq.pop().name;
      Object.keys(this.random_graph.nodes[currNode].neighbors).forEach(neighbor => {
        let currentPath = distances[currNode] + this.random_graph.nodes[currNode].neighbors[neighbor];
        if (currentPath < distances[neighbor]) {
          this.exploredLine(currNode, neighbor);
          distances[neighbor] = currentPath;
          paths[neighbor] = paths[currNode].concat([neighbor]);
          pq.push({name: neighbor, value: distances[neighbor]});
        }
      });
    }
    let shortest_path = paths[this.end.name];

    return this.makeSolutionAnimation(shortest_path);
  }
}