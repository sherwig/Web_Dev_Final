// Graphics.js

import React from 'react';
import ReactDOM from 'react-dom';
// import Sketch from 'react-p5';

// https://codesandbox.io/s/k09k8knxz5?file=/src/index.js:61-92
class Graphics extends React.Component{

  constructor(props){
	super(props);
	this.myRef = React.createRef()
  this.state={
			// for state, we will need values for each of the question answers (taken from form via props?), as well as toggles
			// for the graphics, which will need to turn on/off and change with the form.
		}
  };
// basic setup for p5, can be used to greater extents once we have the form done
	Sketch = ( s ) => {

		let x = 100;
		let y = 100;
	
		s.setup = () => {
			s.createCanvas(200, 200);
		};
	
		s.draw = () => {
			s.background(0);
			s.fill(255);
			s.rect(x,y,50,50);
		};
	};
	
	componentDidMount(){
		this.myP5 = new p5(this.s, this.myRef.current)
	}

	// code snippet (mostly) via: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d

y = 0;
direction = '^';

  render(){
    {console.log(this.props.starSign)}
    // {console.log(this.props.answer)}
    return(
			<div ref = {this.myRef}></div>
      // <div>
      // <Sketch
			// 		setup={(p5, parentRef) => {
			// 			p5.createCanvas(200, 200).parent(parentRef);
			// 		}}
			// 		draw={p5 => {
			// 			p5.background(0);
			// 			p5.fill(255, this.y * 1.3, 0);
			// 			p5.ellipse(p5.width / 2, this.y, 50);
			// 			if (this.y > p5.height) this.direction = '';
			// 			if (this.y < 0) {
			// 				this.direction = '^';
			// 			}
			// 			if (this.direction === '^') this.y += 8;
			// 			else this.y -= 4;
			// 		}}
			// 	/>
      // </div>

    );

  }
}

export default Graphics;
