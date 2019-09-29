export default class GraphBuilder {
  constructor(start, end, speed) {
    this._start = start;
    this._end = end;
    this._speed = speed;
    this._currentNode = 1;
    this._graph = {
      lines: [],
      nodes: {},
      nodeNames: {},
      start: start,
      end: end,
      duration: 0
    };
    this._line_map = {};
    this._graph.start.name = this.getNodeName(start);
    this._graph.end.name = this.getNodeName(end);
  }

  get graph() {
    return this._graph;
  }

  get start() {
    return this._start;
  }

  get end() {
    return this._end;
  }

  saveNodes = function(startName, endName, startCoords, endCoords, distanceBetween) {
    if (!(startName in this._graph.nodes)) {
      this._graph.nodes[startName] = {
        position: startCoords,
        neighbors: {}
      }
    }
    if (!(endName in this._graph.nodes)) {
      this._graph.nodes[endName] = {
        position: endCoords,
        neighbors: {}
      }
    }
    this._graph.nodes[startName].neighbors[endName] = distanceBetween;
    this._graph.nodes[endName].neighbors[startName] = distanceBetween;
  };

  makeLine(startCoords, endCoords, delay) {
    const startName = this.getNodeName(startCoords);
    const endName = this.getNodeName(endCoords);
    if (!this.lineExists(startName, endName))
    {
      const diffX = endCoords.X - startCoords.X,
        diffY = endCoords.Y - startCoords.Y;
      const angle = Math.atan2(diffY, diffX) * (180 / Math.PI);
      const width = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const animation_duration = width / this._speed;
      this.saveNodes(startName, endName, startCoords, endCoords, width);
      this._graph.duration = Math.max(this._graph.duration, delay + animation_duration);
      const line = {
        start: startCoords,
        end: endCoords,
        delay: delay,
        properties: {
          angle: angle,
          width: width,
          duration: animation_duration
        }
      };
      this._graph.lines.push(line);
      this._line_map[`${startName}-${endName}`] = line;
      return line;
    }
    return this._line_map[`${startName}-${endName}`] || this._line_map[`${endName}-${startName}`];
  }

  getNodeName(coords) {
    return typeof this._graph.nodeNames[`${coords.X},${coords.Y}`] === 'undefined'
      ? this._graph.nodeNames[`${coords.X},${coords.Y}`] = `N${this._currentNode++}`
      : this._graph.nodeNames[`${coords.X},${coords.Y}`];
  }

  lineExists(start, end) {
    return !!this._line_map[`${start}-${end}`] || !!this._line_map[`${end}-${start}`];
  }

  clone() {
    let copy = new GraphBuilder(this._start, this._end, this._speed);
    copy._currentNode = this._currentNode;
    copy._graph = JSON.parse(JSON.stringify(this._graph));
    copy._line_map = Object.assign({}, this._line_map);
    return copy;
  }
}