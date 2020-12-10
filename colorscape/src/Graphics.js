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
    var size=15;
    var size2=10;
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

      if (this.props.bgColor=="#ffffff")
      {
          p.stroke(0);
          p.fill(0);
      }

      else {
        p.stroke(255);
        p.fill(255);
      }

      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(a / 3.0);
      a = a + b
      p.pop();

      if (this.props.starSign == "Scorpio") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(.55);
        p.rotate(a / 3.0);
        a = a + b;
        p.strokeWeight(1.8);
        p.rect(-400,100, 20, 20);
        p.line(-400,100,-450,80);

        p.rect(-450,80, 20, 20);
        p.line(-450,80,-500,0);

        p.rect(-500,0, 20, 20);
        p.line(-500,0,-450,-100);

        p.rect(-450,-100, 20, 20);
        p.line(-450,-100,-350,-120);

        p.rect(-350,-120, 20, 20);
        p.line(-350,-120,-200,-100);

        p.rect(-200,-100, 20, 20);
        p.line(-200,-100,-50,0);

        p.rect(-50,0, 20, 20);
        p.line(-50,0,50,200);

        p.rect(50,200, 20, 20);
        p.line(50,200,150,400);

        p.rect(150,400, 20, 20);
        p.line(150,400,200,440);

        p.rect(200,440, 20, 20);
        p.line(200,440,320,580);

        p.rect(320,580, 20, 20);
        p.line(200,440,320,580);

        p.rect(330,500, 20, 20);
        p.line(200,440,330,500);

        p.rect(320,420, 20, 20);
        p.line(200,440,320,420);


        p.pop();
      }

      else if (starSign == "Capricorn") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(1.55);
        p.rotate(a / 3.0);
        a = a + b;
        p.stroke(255);
        p.strokeWeight(1.8);
        p.rect(-200,150, size, size);
        p.line(-200,150, -160,130);
        p.rect(-160,130, size, size);
        p.line(-160,130, -100,120);
        p.rect(-100,120, size, size);
        p.rect(-110,50, size, size);
        p.line(-100,120,-110,50);
        p.rect(-60,100, size, size);
        p.line(-100,120,-60,100);
        p.rect(-70,45, size, size);
        p.line(-60,100,-70,45);
        p.line(-60,100,-30,70);
        p.rect(-30,70, size, size);
        p.rect(-35,35, size, size);
        p.line(-30,70,-35,35);
        p.rect(60,80, size, size);
        p.line(-60,100,60,80);
        p.rect(65,100, size, size);
        p.line(60,80,65,100);
        p.rect(75,60, size, size);
        p.line(60,80,75,60);
        p.line(-30,70,75,60);
        p.rect(60,0, size, size);
        p.line(60,0,75,60);
        p.rect(30,-30, size, size);
        p.line(60,0,30,-30);
        p.pop();


      }

      else if (starSign == "Aries") {
        { console.log(starSign) }
        // p.ellipse(x+50,y+50,50);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        // p.stroke(255);
        p.strokeWeight(1.8);
        p.rect(-200, -150, 20, 20);
        p.line(-200, -150,-60, -80);
        p.rect(-60, -80, 20, 20);

        p.line(-60, -80,0, 0);

        p.rect(0, 0, 20, 20);
        p.line(0, 0,20, 70);
        p.rect(20, 70, 20, 20);
        p.line(40, 70, 10, 130);
        p.rect(10, 130, 20, 20)
        p.pop();

      }

      else if (starSign == "Libra") {
        { console.log(starSign) }
        // p.translate(p.width / 2, p.height / 2);
       p.push();
       p.translate(p.width / 2, p.height / 2);
       p.rotate(a / 3.0);
       a = a + b;
       // p.stroke(255);
       p.strokeWeight(1.8);
       p.rect(-165, 0, 20, 20);
       p.rect(-10, -170, 20, 20);
       p.rect(190, 0, 20, 20);
       p.rect(70, 170, 20, 20);
       p.rect(-200, 320, 20, 20);
       p.rect(-170, 280, 20, 20);
       p.line(-165, 0, -10, -170);
       p.line(-10, -170, 190, 0);
       p.line(190, 0, -165, 0);
       p.line(190, 0, 70, 170);

      p.line(-165, 0, -170, 280);
      p.line(-170, 280, -200, 320);


       p.pop()
      }

      else if (starSign == "Gemini") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        // p.stroke(255);
        p.strokeWeight(1.8);
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
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(1.2);
        p.rotate(a / 3.0);
        a = a + b;
        p.strokeWeight(1.8);
        p.rect(-150,300, size2, size2); //0
        p.line(-150,300, 100,260); //line
        p.rect(100,260, size2, size2); //1
        p.line(100,260, 110,230); //line
        p.rect(110,230, size2, size2); //0
        p.line(110,230, 80,180); //line
        p.rect(80,180, size2,size2); //1
        p.line(80,180, 50,130); //line
        p.rect(50,130, size2, size2); //0
        p.line(50,130, 20,90); //line
        p.rect(20,90, size2,size2);  //1
        p.line(20,90, -10,50);
        p.rect(-10,50, size2, size2);
        p.line(-10,50, -50,10);
        p.rect(-50,10, size2, size2);
        p.line(-50,10, 10,20);
        p.rect(10,20, size2, size2);
        p.line(10,20, 60,30);
        p.rect(60,30, size2, size2);
        p.line(60,30, 140,20);
        p.rect(140,20, size2, size2);
        p.line(140,20, 170,30);
        p.rect(170,30, size2, size2);
        p.line(170,30, 200,10);
        p.rect(200,10, size2, size2);//Return back to here (200,10)
        p.line(200,10, 220,20);
        p.rect(220,20, size2, size2);
        p.line(220,20,240,-20);
        p.rect(240,-20,size2,size2);
        p.line(240,-20,220,-40);
        p.rect(220,-40, size2, size2);
        p.line(220,-40, 190,-40);
        p.rect(190,-40, size2, size2);
        p.line(190,-40, 200,10);

        p.pop();
      }

      else if (starSign == "Taurus") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        // p.stroke(255);
        p.strokeWeight(1.8);
        p.rect(-300, -120, 20, 20); //0
        p.line(-300, -120, 10, 10); //line
        p.rect(-80, -200, 20, 20); //1
        p.line(-80, -200, 30, -40); //line
        p.rect(10, 10, 20, 20); //0
        p.line(10, 10, 40, 40); //line
        p.rect(30, -40, 20,20); //1
        p.line(10, 10, 40, 40); //line
        p.rect(40, 40, 20, 20); //0
        p.line(30, -40, 70, 10); //line
        p.rect(70, 10, 20,20);  //1
        p.rect(90, 50, 20, 20);
        p.line(40, 40, 100, 60);
        p.line(70, 10, 90, 50);
        p.rect(150, 150, 20, 20);
        p.line(90, 50, 150, 150);
        p.rect(300, 250, 20, 20);
        p.line(150, 150, 300,250);
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
         // p.stroke(255);
         p.strokeWeight(1.8);
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
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(a / 3.0);
      a = a + b;
      p.strokeWeight(1.8);
      p.rect(-200, 0, 20, 20);
      p.rect(-20, -80, 20, 20);
      p.rect(0, -50, 20, 20);
      p.rect(50, -70, 20, 20);
      p.rect(0, 30, 20, 20);
      p.rect(5, 90, 20, 20);
      p.rect(200, 0, 20, 20);
      p.rect(370, 20, 20, 20);
      p.rect(-160, 50, 20, 20);
      p.rect(-170, 10, 20, 20);
      p.rect(-190, 220, 20, 20);
      p.line(-20, -80, 0, -50);
      p.line(0, -50, 50, -70);
      p.line(50, -70, 200, 0);
      p.line(200, 0, 390, 20);
      p.line(50, -70, 0, 30);
      p.line(0, 30, 5, 90);
      p.line(-20, -80, -200, 0);
      p.line(-200, 0, -170, 10);
      p.line(-170, 10, -160, 50);
      p.line(-160, 50, -190, 220);
      p.pop();
      }

      else if (starSign == "Sagittarius") {
        { console.log(starSign) }
        // p.translate(p.width / 2, p.height / 2);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.translate(-100,0);
        p.rotate(a / 3.0);
        p.scale(1.3);
        a = a + b;
        p.strokeWeight(1.8);
        p.rect(250,250, 15, 15); //0
        p.line(250,250, 200,220); //line
        p.rect(200,220, 15, 15); //1
        p.line(200,220, 190,150); //line
        p.rect(190,150, 15, 15); //0
        p.line(190,150, 240,140); //line
        p.line(190,150, 140,100); //line
        p.rect(240,140, 15, 15); //1
        p.line(240,140, 140,100); //line
        p.rect(140,100, 15, 15); //0
        p.line(140,100, 100,90); //line
        p.rect(100,90, 15, 15);  //1
        p.line(100,90, -30, 40);
        p.rect(-30, 40, 15, 15);
        p.line(-30, 40, -40,-10);
        p.rect(-40,-10, 15, 15);
        p.line(-30, 40, 0, -40);
        p.rect(0, -40, 15, 15);
        p.line(0, -40, -20,-80);
        p.rect(-20,-80, 15, 15);
        p.line(0, -40, 105,50);
        p.rect(105,50, 15, 15);
        p.line(105,50, 140,55);
        p.rect(140,55, 15, 15);
        p.line(140,55, 190,0);
        p.rect(190,0,15, 15);
        p.line(190,0, 230,50);
        p.rect(230,50, 15, 15);
        p.line(230,50, 260,40);
        p.rect(260,40, 15, 15);
        p.line(260,40, 250,-40);
        p.rect(250,-40, 15, 15);
        p.line(250,-40, 160,-60);
        p.rect(160,-60, 15, 15);
        p.line(160,-60, 150,-30);
        p.rect(150,-30, 15, 15);
        p.line(150,-30, 190,0);
        p.pop();


      }

      else if (starSign == "Cancer") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(a / 3.0);
        a = a + b;
        p.strokeWeight(1.8);
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

      else if (starSign == "Leo") {
        { console.log(starSign) }
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(1.3);
        p.strokeWeight(1.8);
        p.rotate(a / 3.0);
        a = a + b;
        p.rect(200,200, size, size); //0
        p.line(200,200, 160,220); //line
        p.rect(160,220, size, size); //1
        p.line(160,220, 90,170); //line
        p.rect(90,170, size, size); //0
        p.line(90,170, 80,130); //line
        p.rect(80,130, size,size); //1
        p.line(80,130,-30,100); //line
        p.rect(-30,100, size, size); //0
        p.line(-30,100, -80,50); //line
        p.rect(-80,50, size,size);  //1
        p.line(-80,50, -20,55);
        p.rect(-20,55, size, size);

        p.line(-20,55, 120,50);
        p.rect(120,50, size, size);
        p.line(120,50, 115,90);
        p.rect(115,90, size, size);

        p.line(115,90, 80,130);
        p.pop();

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
