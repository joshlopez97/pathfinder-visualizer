import React, {Component} from 'react';
import Space from "./space";
import {conf} from "../constants";
import './board.css';


class Row extends Component {
  render() {
    let indices = [];
    for (let i = 0; i < conf.cellsPerRow; i++)
    {
      indices.push(i);
    }
    return (<tr id={"row-" + this.props.row} className="space-row">
      {indices.map((value, index) => {
        return <Space row={this.props.row} column={index} key={index}/>
      })}
    </tr>);
  }
}

export default Row;