import {conf} from "../constants";

export default class Random {
  static coordinates()
  {
    const approxCellsPerColumn = (window.innerHeight - conf.navHeight) / (window.innerWidth / conf.cellsPerRow);
    const randomSpace = Random.cell(
      [1, conf.cellsPerRow - 2],
      [1, approxCellsPerColumn - 2]);
    let endY = randomSpace.space.getBoundingClientRect().top + window.scrollY;
    let endX = randomSpace.space.getBoundingClientRect().left + window.scrollX;
    return {X: endX, Y: endY};
  }

  static choice(list) {
    return list[Random.integer(0, list.length - 1)];
  }
  static cell(xRange, yRange) {
    let spaceRow = Random.integer(yRange[0], yRange[1]);
    let spaceColumn = Random.integer(xRange[0], xRange[1]);
    let id = spaceRow + '-' + spaceColumn;
    return {space: document.getElementById(id), row: spaceRow, column: spaceColumn};
  }

  static integer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}