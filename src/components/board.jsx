import React, {Component} from 'react';
import Row from "./row";
import {conf} from '../constants';
import './board.css';

class Board extends Component {
  state = {numRows: Board.determineRows()};

  setRows = () => {
    this.setState({numRows: Board.determineRows()})
  };

  static determineRows() {
    const cellSize = window.innerWidth / conf.cellsPerRow;
    return window.innerHeight / cellSize;
  }

  componentDidMount() {
    window.addEventListener('resize', this.setRows);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setRows);
  }

  render() {
    const indices = [];
    for (let i = 0; i < this.state.numRows; i++)
    {
      indices.push(i);
    }
    return (
      <div className="board">
        <table className="spaces-holder">
          <tbody>
          {indices.map((value, index) => {
            return <Row row={index} key={index}/>
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;