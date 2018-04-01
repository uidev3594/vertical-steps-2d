import React from 'react';
import CircleStep from './circular-step'

import {data} from './data'
import "./style.scss";


class CircularContainer extends React.Component {
  _baseClass = "circular-steps-component";

  renderGraph(){
    return (
      <svg
          id="Layer_1"
          data-name="Layer 1"
          width={`90%`}
          height={`50%`}
          viewBox="0 0 500 300.33">
     

     <title>3D Circular Steps</title>
     <rect className="cls-1" width="300" height="300.33"/>
     
     {data.map((data, index) => {
          let props = {
            data: data,
            index:index,
          }
          return (
            <CircleStep {...props} key={index} data={data}></CircleStep>
          )
        })}
      </svg>

    );
  }
  render() {
    return <div  className={this._baseClass}>
        {this.renderGraph()}
      </div>
  }
}
export default CircularContainer;
