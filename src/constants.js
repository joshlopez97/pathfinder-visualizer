const config = {
  navHeight: 50,
  cellSize: 5,
  cellsPerRow: 50,
  nodeSize: 4,
  draw_speed: 1500,
  solve_speed: 800,
  lineClickRadius: 4,
  algorithmLabels: {
    "Dijkstra's": "dijkstra",
    "A* Search": "astar"
  },
  startingAlgorithm: {
    name: "dijkstra",
    label: "Dijkstra's"
  }
};

export const conf = config;