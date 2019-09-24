import React, {Component} from 'react';
import {keyframes} from "styled-components";
import styled from "styled-components";

class Label extends Component {
  get animatedLabel() {
    return this.props.delay > 0 ? (styled.div`
        animation: ${keyframes`
          0% { opacity: 0 }
          100% { opacity: 100 }
        `} 0.5s linear forwards;
        animation-delay: ${this.props.delay}s;
    `) : styled.div``;
  }

  render() {
    const AnimatedLabel = this.animatedLabel;
    return (
      <AnimatedLabel className={`label ${!!this.props.class ? this.props.class : ""}`} style={this.props.style}>
        <svg className="caret-holder" height="5" width="8">
          <path d="M0 5 L4 0 L8 5"/>
        </svg>
        <span className="label-value">{this.props.text}</span>
      </AnimatedLabel>
    );
  }
}

export default Label;