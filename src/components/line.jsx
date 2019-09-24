import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {conf} from '../constants';
import './graph.css';
import Node from "./node";
import Label from "./label";

class Line extends Component {
  constructor(props) {
    super(props);
    this.angle = props.properties.angle;
    this.width = props.properties.width;
    this.lineHolderStyle = {
      width: this.width,
      top: this.props.start.Y - conf.navHeight,
      left: this.props.start.X,
      transform: `rotate(${this.angle}deg`,
      height: conf.lineClickRadius * 2,
      margin: `${conf.lineClickRadius * -1}px 0`
    };
    this.labelStyle = {
      transform: `rotate(${-1 * this.angle}deg`,
      top: conf.lineClickRadius
    };
  }

  get animatedLine() {
    const growLine = () => keyframes`
        0% { width: 0 }
        100% { width: ${this.width}px }
    `;
    return (styled.div`
        animation: ${growLine} ${this.props.properties.duration}s linear forwards;
        animation-delay: ${this.props.delay}s;
    `);
  }

  render() {
    const AnimatedLine = this.animatedLine;
    console.log(this.props.type);
    return (
      <div className="line-container">
        <div style={this.lineHolderStyle} className="line-holder">
          <Node delay={this.props.delay}/>
          <Node delay={this.props.delay + this.props.properties.duration} type={"right"}/>
          <AnimatedLine className="line"/>
          <div style={this.labelStyle} className="label-holder">
            <Label text={Math.round(this.width)} delay={this.props.type === "solve" ? this.props.graphRenderTime : 0}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Line;