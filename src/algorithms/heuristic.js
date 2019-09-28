export default class Heuristics {
  static distance(startCoords, endCoords) {
    return Math.sqrt(Math.pow(startCoords.X - endCoords.X, 2) + Math.pow(startCoords.Y - endCoords.Y, 2))
  }

  static distanceToGoal(node, graph) {
    return Heuristics.distance(node.position, graph.end);
  };
}