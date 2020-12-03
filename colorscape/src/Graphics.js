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
  // this.state={
	// 	}
  };

// basic setup for p5, can be used to greater extents once we have the form done
	Sketch = (p) => {
		var a = 0
    let b=0;
    let changer=0;
		let x = 50;
		let y = 50;
    let starSign;
    var stars = [];
    // {console.log("here")}

		p.setup = () => {
			p.createCanvas(800, 800);
      p.rectMode(p.CENTER);

      for (var i = 0; i < 500; i++) {
		      stars[i] = new Star();
	       }

		}

//https://editor.p5js.org/wvnl/sketches/5wnuHAXKd
class Star {
	constructor() {
		this.x = p.random(p.width);
		this.y = p.random(p.height);
		this.size = p.random(0.25, 3);
		this.t = p.random(p.TAU);
	}

  draw() {
  this.t += 0.1;
  var scale = this.size + p.sin(this.t) * 2;
  p.noStroke();
  p.ellipse(this.x, this.y, scale, scale);
  }
}



		p.draw = () => {

    var name=this.props.answer;
    b=p.map(name.length,0, 30, 0.001, 0.1);

    starSign=this.props.starSign;
    p.background(this.props.bgColor);

    for (var i = 0; i < stars.length; i++) {
      stars[i].draw();
    }


    p.translate(p.width/2,p.height/2);
    // changer+=.01;
    // p.push();
    // p.strokeWeight(0);
    // p.fill(255,127+p.sin(changer*255));
    // {console.log(255*p.abs(p.sin(changer+255)))}

    // p.ellipse(-100,-100,10);
    // p.pop();


    p.fill(255);

    p.rotate(a / 3.0);
    a = a + b
    p.rect(0,0,50,50);
    p.rect(x,y,50,50);




    if (this.props.starSign=="Scorpio")
    {
      {console.log(starSign)}
      p.fill(0);
      p.rect(x+50,y+50,50,50);
    }

    else if (starSign=="Capricorn")
    {
      {console.log(starSign)}
      p.rect(x+50,y+50,50,50);

    }

    else if (starSign=="Aries")
    {
      {console.log(starSign)}
      p.ellipse(x+50,y+50,50);
    }

    else if (starSign=="Libra")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Gemini")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Pisces")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Taurus")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Virgo")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Aquarius")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Sagittarius")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Cancer")
    {
      {console.log(starSign)}
    }

    else if (starSign=="Aquarius")
    {
      {console.log(starSign)}
    }

		}
	}

	componentDidMount(){
		this.p = new p5(this.Sketch, this.myRef.current);
     // this.myP5 = new p5(this.Sketch, this.myRef.current)
	}

	// code snippet (mostly) via: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d
  render(){
    // {console.log(this.props.starSign)}
    return(
			<div ref = {this.myRef}></div>

    );
  }
}

export default Graphics;
