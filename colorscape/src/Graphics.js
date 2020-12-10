// Graphics.js

import React from 'react';
import ReactDOM from 'react-dom';
import p5 from 'p5';
import Sketch from 'react-p5';

// https://codesandbox.io/s/k09k8knxz5?file=/src/index.js:61-92
class Graphics extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    // this.state={
    // 	}
  };

  // basic setup for p5, can be used to greater extents once we have the form done
  Sketch = (p) => {
    var a = 0
    let b = 0;
    let changer = 0;
    let x = 50;
    let y = 50;
    let starSign;
    var stars = [];
    // {console.log("here")}

    p.setup = () => {
      p.createCanvas(800, 800);
      // p.rectMode(p.CENTER);

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

      var name = this.props.answer;
      b = p.map(name.length, 0, 30, 0.001, 0.1);

      starSign = this.props.starSign;
      p.background(this.props.bgColor);

      for (var i = 0; i < stars.length; i++) {
        stars[i].draw();
      }



      // changer+=.01;

      // p.strokeWeight(0);
      // p.fill(255,127+p.sin(changer*255));
      // {console.log(255*p.abs(p.sin(changer+255)))}

      // p.ellipse(-100,-100,10);
      // p.pop();

      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.fill(255);
      p.rotate(a / 3.0);
      a = a + b
      p.pop();
      // p.rect(0, 0, 50, 50);
      // p.rect(x, y, 50, 50);




      if (this.props.starSign == "Scorpio") {
        { console.log(starSign) }
        p.push()
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-250, 100, 20, 20);
        p.rect(-150, 50, 20, 20);
        p.line(-250, 100, -150, 50);
        p.rect(-200, 200, 20, 20);
        p.line(-150, 50, -200, 200);
        p.rect(-100, 250, 20, 20);
        p.line(-200, 200, -100, 250);
        p.rect(-10, 170, 20, 20);
        p.line(-100, 250, -10, 170);
        p.rect(0, 0, 20, 20);
        p.line(-10, 170, 0, 0);
        p.rect(100, -100, 20, 20);
        p.line(0, 0, 100, -100);
        p.rect(250, -150, 20, 20);
        p.line(100, -100, 250, -150);
        p.rect(220, -70, 20, 20);
        p.rect(180, -210, 20, 20);
        p.line(250, -150, 220, -70);
        p.line(250, -150, 180, -210);
        p.pop();
        // p.push();
        // p.translate(p.width / 2, p.height / 2);
        // p.scale(.55);
        // p.rotate(a / 3.0);
        // a = a + b;
        // p.stroke(255);
        // p.rect(-400,100, 20, 20);
        // p.line(-400,100,-450,80);

        // p.rect(-450,80, 20, 20);
        // p.line(-450,80,-500,0);

        // p.rect(-500,0, 20, 20);
        // p.line(-500,0,-450,-100);

        // p.rect(-450,-100, 20, 20);
        // p.line(-450,-100,-350,-120);

        // p.rect(-350,-120, 20, 20);
        // p.line(-350,-120,-200,-100);

        // p.rect(-200,-100, 20, 20);
        // p.line(-200,-100,-50,0);

        // p.rect(-50,0, 20, 20);
        // p.line(-50,0,50,200);

        // p.rect(50,200, 20, 20);
        // p.line(50,200,150,400);

        // p.rect(150,400, 20, 20);
        // p.line(150,400,200,440);

        // p.rect(200,440, 20, 20);
        // p.line(200,440,320,580);

        // p.rect(320,580, 20, 20);
        // p.line(200,440,320,580);

        // p.rect(330,500, 20, 20);
        // p.line(200,440,330,500);

        // p.rect(320,420, 20, 20);
        // p.line(200,440,320,420);

        // p.pop();
      }

      else if (starSign == "Capricorn") {
        { console.log(starSign) }
        // p.rect(x + 50, y + 50, 50, 50);
        p.translate(p.width / 2, p.height / 2);

      }

      else if (starSign == "Aries") {
        { console.log(starSign) }
        // p.ellipse(x+50,y+50,50);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-200, -150, 20, 20);
        p.line(-200, -150, -60, -80);
        p.rect(-60, -80, 20, 20);

        p.line(-60, -80, 0, 0);

        p.rect(0, 0, 20, 20);
        p.line(0, 0, 20, 70);
        p.rect(20, 70, 20, 20);
        p.line(40, 70, 10, 130);
        p.rect(10, 130, 20, 20)
        p.pop();

        // p.rect(100, 150, 30, 30);
        // p.rect(500, 80, 30, 30);
        // p.rect(670, 500, 30, 30);
        // p.rect(680, 590, 30, 30);
        // p.rect(620, 660, 30, 30);

      }

      else if (starSign == "Libra") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-200, 320, 20, 20);
        p.rect(-170, 280, 20, 20);
        p.line(-200, 320, -170, 280); 
        p.rect(-165, 0, 20, 20); 
        p.line(-170, 280, -165, 0); 
        p.rect(-10, -170, 20, 20); 
        p.line(-165, 0, -10, -170)
        p.line(-165, 0, 190, 0); 
        p.line(-10, -170, 190, 0); 
        p.rect(190, 0, 20, 20); 
        p.rect(70, 170, 20, 20);
        p.line(190, 0 , 70, 170);  
      }

      else if (starSign == "Gemini") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-50, -250, 20, 20);
        p.rect(-150, -150, 20, 20);
        p.line(-150, -150, -120, -70);
        p.line(-50, -240, -150, -140);
        p.rect(-120, -70, 20, 20);
        p.rect(100, 50, 20, 20);
        p.line(-120, -70, 100, 50);
        p.rect(70, 120, 20, 20);
        p.line(110, 60, 80, 120);
        p.rect(170, 50, 20, 20);
        p.line(110, 60, 180, 50);
        p.rect(200, -50, 20, 20);
        p.line(180, 50, 200, -30);
        p.rect(300, -70, 20, 20);
        p.line(200, -30, 300, -55);
        p.rect(30, -270, 20, 20);
        p.rect(90, -150, 20, 20);
        p.line(30, -270, 90, -150);
        p.line(-40, -250, 30, -270);
        p.line(200, -50, 90, -150);
        p.pop();
      }

      else if (starSign == "Pisces") {
        { console.log(starSign) }
        p.translate(p.width / 2, p.height / 2);
      }

      else if (starSign == "Taurus") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-300, -120, 20, 20); //0
        p.line(-300, -120, 10, 10); //line
        p.rect(-80, -200, 20, 20); //1
        p.line(-80, -200, 30, -40); //line
        p.rect(10, 10, 20, 20); //0
        p.line(10, 10, 40, 40); //line
        p.rect(30, -40, 20, 20); //1
        p.line(10, 10, 40, 40); //line
        p.rect(40, 40, 20, 20); //0
        p.line(30, -40, 70, 10); //line
        p.rect(70, 10, 20, 20);  //1
        p.rect(90, 50, 20, 20);
        p.line(40, 40, 100, 60);
        p.line(70, 10, 90, 50);
        p.rect(150, 150, 20, 20);
        p.line(90, 50, 150, 150);
        p.rect(300, 250, 20, 20);
        p.line(150, 150, 300, 250);
        p.rect(280, 300, 20, 20);
        p.line(310, 250, 290, 300);
        p.pop();
      }

      else if (starSign == "Virgo") {
        { console.log(starSign) }
        p.push()
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(-80, -350, 20, 20); 
        p.rect(-150, -100, 20, 20); 
        p.rect(0, -80, 20, 20); 
        p.rect(20, 50, 20, 20); 
        p.rect(-170, 170, 20, 20); 
        p.rect(-5, 200, 20, 20); 
        p.rect(5, 350, 20, 20); 
        p.rect(170, 230, 20, 20); 
        p.rect(150, 50, 20, 20); 
        p.rect(100, -120, 20, 20); 
        p.rect(120, -180, 20, 20); 
        p.rect(110, -150, 20, 20); 
        p.line(-80, -350, -150, -100); 
        p.line(-150, -100, 0, -80); 
        p.line(0, -80, 20, 50); 
        p.line(20, 50, 150, 50); 
        p.line(20, 50, -5, 200); 
        p.line(-5, 200, -170, 170); 
        p.line(150, 50, 170, 230); 
        p.line(170, 230, 5, 350); 
        p.line(150, 50, 100, -120); 
        p.line(100, -120, 0, -80); 
        p.line(100, -120, 110, -150);
        p.line(110, -150, 120, -180); 
        p.pop(); 
      }

      else if (starSign == "Aquarius") {
        { console.log(starSign) }
        p.translate(p.width / 2, p.height / 2);
      }

      else if (starSign == "Sagittarius") {
        { console.log(starSign) }
        p.translate(p.width / 2, p.height / 2);
      }

      else if (starSign == "Cancer") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.rect(0, -300, 20, 20);
        p.rect(20, 0, 20, 20);
        p.rect(0, 100, 20, 20);
        p.rect(-100, 250, 20, 20);
        p.rect(250, 300, 20, 20);
        p.line(10, -290, 30, 0)
        p.line(30, 0, 10, 100);
        p.line(10, 100, -90, 250);
        p.line(10, 100, 250, 300);
        p.pop();
      }

      else if (starSign == "Aquarius") {
        { console.log(starSign) }
        p.translate(p.width / 2, p.height / 2);
      }

    }
  }

  componentDidMount() {
    this.p = new p5(this.Sketch, this.myRef.current);
    // this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  // code snippet (mostly) via: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d
  render() {
    // {console.log(this.props.starSign)}
    return (
      <div ref={this.myRef}></div>

    );
  }
}

export default Graphics;
