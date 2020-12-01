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
    let b=0;
    let changer=0;
		let x = 50;
		let y = 50;
    let starSign;
    {console.log("here")}

		p.setup = () => {
			p.createCanvas(800, 800);
      p.rectMode(p.CENTER);

		}

		p.draw = () => {

    var name=this.props.answer;
    b=p.map(name.length,0, 30, 0.001, 0.1);

    starSign=this.props.starSign;

    if (starSign==="Scorpio")
    {
      {console.log(starSign)}
      // p.fill(0);
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

		p.background(this.props.bgColor);

    p.fill(255);
    // p.push();
    p.translate(p.width/2,p.height/2);
    p.rotate(a / 3.0);
    p.rect(0,0,50,50);
    p.rect(x,y,50,50);

    // p.rect(x+200,y+200,50,50);
    // p.rect(x+50,y+50,50,50);
    // p.pop();
//   p.rect(-26, -26, 52, 52);
    a = a + b

		}
	}

	componentDidMount(){
		this.myP5 = new p5(this.Sketch, this.myRef.current);
	}

	// code snippet (mostly) via: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d

  render(){
    // {console.log(this.props.bgColor)}
    // {console.log(this.props.answer)}
    return(
			<div ref = {this.myRef}></div>

    );
  }
}

export default Graphics;
