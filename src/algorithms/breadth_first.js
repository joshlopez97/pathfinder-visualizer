import GraphSolver from "./solver";

export default class BreadthFirst extends GraphSolver {
  constructor(random_graph) {
    super(random_graph);
    this._solution = this.solve();
  }

  solve() {
    let paths = {};
    let queue = [];

    const startNode = this.random_graph.start.name;
    paths[startNode] = [];

    queue.push(startNode);
    while (queue.length > 0) {
      const N = queue.length;
      for (let i = 0; i < N; i++) {
        let currNode = queue.shift();
        console.log(currNode);
        if (currNode === this.random_graph.end.name) {
          return this.makeSolutionAnimation(paths[this.end.name]);
        }
        let neighbors = this.random_graph.nodes[currNode].neighbors;
        Object.keys(neighbors).forEach(neighbor => {
          this.exploredLine(currNode, neighbor);
          paths[neighbor] = paths[currNode].concat([neighbor]);
          queue.push(neighbor);
        });
      }
    }
    let shortest_path = paths[this.end.name];

    return this.makeSolutionAnimation(shortest_path);
  }
}