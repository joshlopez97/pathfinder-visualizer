import React, {Component} from 'react';
import './graph.css';
import Label from "./label";
import {keyframes} from "styled-components";
import styled from "styled-components";

class Node extends Component {
  constructor(props) {
    super(props);
    this.style = this.props.style || {};
    this.style.animationDelay = `${this.props.delay || 0}s`;
    this.state = {type: this.props.type || "normal"};
    this.labelClass = "";
    if (this.props.type === 'start' || this.props.type === 'end') {
      this.labelClass = this.props.type;
    }
  }


  render() {
    const fadeIn = () => keyframes`
        0% {
            opacity: 0
        }
        100% {
            opacity: 100
        }
    `;
    const AnimatedNode = styled.div`
        animation: ${fadeIn} 0.5s linear forwards;
        animation-delay: ${this.style.animationDelay};
    `;
    return (
      <div className={`node-holder ${this.state.type}`}>
        {!!this.props.label ?
          <Label class={this.labelClass} type={this.state.type} style={this.props.style} text={this.props.label}/> : ""}
        <AnimatedNode style={this.props.style} className={`node ${this.state.type}`}/>
      </div>
    );
  }
}

export default Node;