// Graphics.js

import React from 'react';
import ReactDOM from 'react-dom';
import p5 from 'p5';
import Sketch from 'react-p5';

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
	Sketch = (p) => {
		var a = 0
		let x = 400;
		let y = 400;
    {console.log("here")}

		p.setup = () => {
			p.createCanvas(800, 800);
		}

		p.draw = () => {
      

		p.background(this.props.bgColor);
		p.fill(255);

    // p.rectMode(CENTER);
    p.push();
  	p.translate(50, 50);
    p.rotate(a / 3.0);
    p.rect(x,y,50,50);
    p.rect(x+200,y+200,50,50);
    p.rect(x+50,y+50,50,50);
    p.pop();

<<<<<<< HEAD
=======
			p.background(this.props.bgColor);
			p.fill(255);
	  
	p.translate(50, 50);
  p.rotate(a / 3.0); 
  p.rect(x,y,50,50);
  p.rect(x+200,y+200,50,50);
  p.rect(x+50,y+50,50,50);
>>>>>>> 77e25e21a589e33defc0a8bf466beb4cfffe136c
//   p.rect(-26, -26, 52, 52);
    a = a + 0.01

		}
	}

	componentDidMount(){
		this.myP5 = new p5(this.Sketch, this.myRef.current);
	}

	// code snippet (mostly) via: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d

  render(){
    {console.log(this.props.bgColor)}
    // {console.log(this.props.answer)}
    return(
			<div ref = {this.myRef}></div>

    );
  }
}

export default Graphics;
