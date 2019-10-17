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
  algorithms: {
    dijkstra: {
      label: "Dijkstra",
      name: "dijkstra"
    },
    astar: {
      label: "A* Search",
      name: "astar"
    },
    breadth: {
      label: "Breadth-First Search",
      name: "breadth"
    }
  },
  startingAlgorithm: {
    label: "Dijkstra",
    name: "dijkstra"
  }
};

export const conf = config;