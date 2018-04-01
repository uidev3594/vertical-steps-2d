import React from 'react';
import Step from './step';

import {data} from './data'
import "./style.scss";

class VsContainer extends React.Component {
  _baseClass = "vertical-steps-component";

  renderGraph(){
    return (
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="Layer_2"
        data-name="Layer 2"
        width={`100%`}
        height= {`100%`}
        className="container"
        viewBox="0 0 200 150">
     

        <title>2D-Vertical-Steps-Two</title>
        <path fill="#dcdbdb" d="M0 0h200v150H0z" />

        {data.map((item, index) => {
          let props = {
            data: item,
            index: index,
          }
          return (
            <Step {...props} key={index} data={item}></Step>
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
export default VsContainer;
