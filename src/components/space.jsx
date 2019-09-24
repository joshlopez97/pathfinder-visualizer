import React, {Component} from 'react';
import './board.css';

class Space extends Component {
  render() {
    return (<td id={this.props.row + "-" + this.props.column}
                className="space">
    </td>);
  }
}

export default Space;