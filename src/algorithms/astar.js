import GraphSolver from "./solver";
import Heuristics from "./heuristic";
import TinyQueue from "tinyqueue";

export default class AStar extends GraphSolver {
  constructor(random_graph) {
    super(random_graph);
    this._openList = new TinyQueue([], (node1, node2) => {
      return node1.f - node2.f;
    });
    this._openMap = {};
    this._closedSet = new Set([]);
    this._gscore = {};
    this._fscore = {};
    this._solution = this.solve();
  }

  addToOpenList(nodeData) {
    console.log("add(" + nodeData.name + ")");
    if (!!!nodeData.name) {
      nodeData.name = this.random_graph.getNodeName(nodeData.position);
    }
    this._openList.push(nodeData);
    this._openMap[nodeData.name] = nodeData;
  }

  removeFromOpenList(node) {
    delete this._openMap[node];
  }

  getNextNode() {
    let node = this._openList.pop();
    if (!!node && !!node.name && !(node.name in this._openMap)) {
      console.log(node.name + " not found in " + JSON.stringify(this._openMap));
      return this.getNextNode();
    }
    console.log("popped " + node);
    return node;
  }

  solve() {
    this.applyHeuristic(Heuristics.distanceToGoal);

    this.addToOpenList({f: 0, g: 0, ...this.start});

    let delay_map = {};
    let paths = {};
    Object.keys(this.random_graph.nodes).forEach(node => {
      paths[node] = [];
      this._gscore[node] = Infinity
    });
    this._gscore[this.start.name] = 0;


    while (Object.keys(this._openMap).length > 0) {
      let currNode = this.getNextNode();

      if (typeof currNode === 'undefined') {
        console.log("no more nodes, ending");
        break;
      }
      if (currNode.name === this.end.name) {
        console.log("found end " + this.end.name);
        break;
      }
      this._closedSet.add(currNode.name);
      this.removeFromOpenList(currNode.name);
      for (let neighborName of Object.keys(this.random_graph.nodes[currNode.name].neighbors)) {
        let delay = delay_map[currNode.name] || 0;
        let newLine = this.makeLine(this.random_graph.nodes[currNode.name].position, this.random_graph.nodes[neighborName].position, delay);
        delay_map[neighborName] = newLine.delay + newLine.properties.duration;
        let neighborData = this.random_graph.nodes[neighborName];
        neighborData.name = neighborName;
        neighborData.g = this._gscore[currNode.name] + this.random_graph.nodes[currNode.name].neighbors[neighborName];
        neighborData.f = neighborData.g + neighborData.heuristic;

        if (!this._closedSet.has(neighborName)) {
          if (neighborData.g < this._gscore[neighborName]) {
            this._gscore[neighborName] = neighborData.g;
            this._fscore[neighborName] = neighborData.f;
            paths[neighborName] = paths[currNode.name].concat([neighborName]);
            if (!(neighborName in this._openMap)) {
              this.addToOpenList(neighborData);
            }
          }
        }
      }
    }
    let shortest_path = paths[this.end.name];
    return this.makeSolutionAnimation(shortest_path);
  }
}