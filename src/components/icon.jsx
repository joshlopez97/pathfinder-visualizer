import React, {Component} from 'react';

class Icon extends Component {
  render() {
    return (
      <div className="icon-holder">
        <svg className={`icon ${this.props.renderState}`} width="50" height="50" viewBox="-5 -5 60 60"
             xmlns="http://www.w3.org/2000/svg">
          <path transform="rotate(0 24.750003814697266,24.46666717529297) "
                d="m24.58065,17.58091c-3.0637,0 -5.65444,2.00352 -6.54757,4.77002m0,4.22994c0.89364,2.7665 3.48387,4.77054 6.54808,4.77156c3.80157,-0.00102 6.88525,-3.08266 6.88576,-6.88576c-0.00102,-3.80362 -3.0847,-6.88474 -6.88627,-6.88576"
                className="inner">
            {this.props.renderState !== "" ?
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="180 24.750003814697266,24.46666717529297"
                                to="540 24.750003814697266,24.46666717529297"
                                dur="0.5s"
                                repeatCount="indefinite"/> : ""}

          </path>
          <path stroke="#e605ff" transform="rotate(180 24.52094841003418,25.00000381469727) "
                d="m24.1499,9.91326c-6.71258,0 -12.38891,4.38972 -14.34576,10.45114m0,9.26782c1.95797,6.06141 7.63318,10.45227 14.34689,10.45451c8.32926,-0.00224 15.08562,-6.75412 15.08673,-15.08674c-0.00224,-8.33375 -6.7586,-15.0845 -15.08786,-15.08674"
                className="middle">
            {this.props.renderState !== "" ?
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="180 24.52094841003418,25.00000381469727"
                                to="-180 24.52094841003418,25.00000381469727"
                                dur="0.5s"
                                repeatCount="indefinite"/> : ""}

          </path>
          <path
            d="m24.44616,2.48102c-10.01942,0 -18.4921,6.55225 -21.41297,15.59973m0,13.83347c2.92253,9.04747 11.39355,15.60141 21.41465,15.60476c12.43253,-0.00335 22.51731,-10.08143 22.51897,-22.51898c-0.00334,-12.43924 -10.08812,-22.51564 -22.52065,-22.51898"
            className="outer">
            {this.props.renderState !== "" ?
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0 24.99999809265136,24.99999809265137"
                                to="360 24.99999809265136,24.99999809265137"
                                dur="0.5s"
                                repeatCount="indefinite"/> : ""}

          </path>
        </svg>
      </div>
    );
  }
}

export default Icon;