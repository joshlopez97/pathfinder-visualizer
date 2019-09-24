import Random from "./random";
import GraphBuilder from "./graph";
import {conf} from '../constants';

export default class RandomGraph extends GraphBuilder {
  constructor(start, end, numLines) {
    super(start, end, conf.draw_speed);
    this._size = numLines;
    this.build();
  }

  build() {
    let lines = this.randomPath(this._start, this._end);
    const numBranchPoints = Math.floor(this._size / 2.5),
      range = Math.floor(lines.length / numBranchPoints);
    for (let i = 0; i < numBranchPoints; i++) {
      lines = this.branchFrom(lines[Random.integer(i * range, (i + 1) * range)], lines, Random.integer(2, 4));
    }
    console.log(this.graph);
    return this._graph;
  }

  branchFrom(branchOrigin, lines, numBranches, branchLength = 3) {
    for (let i = 0; i < numBranches; i++) {
      lines = lines.concat(this.randomPath(branchOrigin.start, Random.choice(lines).start, branchLength, branchOrigin.delay));
    }
    return lines;
  }

  randomPath(start, end, numLines = 10, delay = 0) {
    let lines = [];
    let prevLine = {}, currLine = this.makeLine(start, Random.coordinates(), delay);
    for (let i = 0; i < numLines; i++) {
      lines.push(currLine);
      prevLine = Object.assign({}, currLine);
      currLine = this.makeLine(prevLine.end, Random.coordinates(), prevLine.delay + prevLine.properties.duration);
    }
    currLine = this.makeLine(prevLine.end, end, prevLine.delay + prevLine.properties.duration);
    lines.push(currLine);
    return lines;
  }
}