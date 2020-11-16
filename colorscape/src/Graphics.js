// Graphics.js

import React from 'react';
import ReactDOM from 'react-dom';
import Sketch from 'react-p5';

// https://codesandbox.io/s/k09k8knxz5?file=/src/index.js:61-92
class Graphics extends React.Component{

  constructor(props){
  super(props);
  this.state={

    }
  };



y = 0;
direction = '^';

  render(){
    {console.log(this.props.starSign)}
    // {console.log(this.props.answer)}
    return(
      <div>
      <Sketch
					setup={(p5, parentRef) => {
						p5.createCanvas(200, 200).parent(parentRef);
					}}
					draw={p5 => {
						p5.background(0);
						p5.fill(255, this.y * 1.3, 0);
						p5.ellipse(p5.width / 2, this.y, 50);
						if (this.y > p5.height) this.direction = '';
						if (this.y < 0) {
							this.direction = '^';
						}
						if (this.direction === '^') this.y += 8;
						else this.y -= 4;
					}}
				/>

      </div>

    );

  }
}

export default Graphics;
