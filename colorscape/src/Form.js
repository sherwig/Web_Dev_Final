// Form.js
import React from 'react';
import Graphics from './Graphics.js'
// import DatePicker from "react-datepicker";
import {SketchPicker} from 'react-color';
// import React, { useState } from "react";


// Run npm install react-color --save

class Form extends React.Component{
    constructor(props){
    super(props);
    this.state={
        birthday: '',
        textValue: '',
        sign: '',
        favoriteColor: '',
        background: '#fff'
        // Date(startDate, setStartDate);
    }
    //binding is necessary for 'this' to work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignChange = this.handleSignChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBgChange = this.handleBgChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);

  };
// const [] = useState(new );

  handleChange(event) {
    this.setState({textValue: event.target.value});
    // { console.log(this.state.value) }
}

handleSignChange(event) {
   this.setState({sign: event.target.value});
 }

 handleColorChange(event) {
    this.setState({favoriteColor: event.target.value});
  }

// https://casesandberg.github.io/react-color/
  handleBgChange(color, event) {
    this.setState({ background: color.hex });
}

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    // {console.log(this.state.background)}
  };

handleSubmit(event) {
  //In here set all of the values of the form.
  // this.state.value='';
  // this.setState({sign: event.target.sign});
  // this.setState({value: event.target.value});

  // {console.log(this.state.todo)}
  // this.handleVoteChange();
  // this.setState({counter: this.state.counter+1});
  event.preventDefault();
}



render(){
    var submitStyle={
      color: "#333",
      marginTop: "5%",
      marginLeft: "20%"
    }
    // <SketchPicker selected={startDate} onChange={date => setStartDate(date)} />

    /* <label>
      Enter Your Favorite Color:
      <input type="text" value={this.state.value} onChange={this.handleColorChange} />
      </label> */

    /*<input type="submit" value="Submit" />*/
    return(
      <div>

      <div style={submitStyle}>
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>


        <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete }/>
        <label>
        Pick your Star Sign:
        <select value={this.state.sign} onChange={this.handleSignChange}>
          <option value="Capricorn">Capricorn</option>
          <option value="Aries">Aries</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value = "Gemini">Gemini</option>
          <option value = "Pisces">Pisces</option>
          <option value = "Taurus">Taurus</option>
          <option value = "Virgo">Virgo</option>
          <option value = "Aquarius">Aquarius</option>
          <option value = "Sagittarius">Sagittarius</option>
          <option value = "Cancer">Cancer</option>
          <option value = "Aquarius">Aquarius</option>
        </select>
      </label>

      </form>
      </div>


        <div>
        <Graphics answer={this.state.textValue} color={this.state.favoriteColor} starSign={this.state.sign} bgColor= {this.state.background} submit={this.handleSubmit}/>
        </div>
      </div>

    );

  }

}

export default Form;
