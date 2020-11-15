// Form.js
import React from 'react';
import Graphics from './Graphics.js'
import DatePicker from "react-datepicker";
// import React, { useState } from "react";

class Form extends React.Component{
    constructor(props){
    super(props);
    this.state={
        birthday: '',
        textValue: '',
        sign: 'scorpio',
        todo:
        [
        ]
        // Date(startDate, setStartDate);
    }
    //binding is necessary for 'this' to work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignChange = this.handleSignChange.bind(this);

  };
// const [] = useState(new );

  handleChange(event) {
    this.setState({value: event.target.value});
    // { console.log(this.state.value) }
}

handleSignChange(event) {
   this.setState({sign: event.target.sign});
 }

handleSubmit(event) {
  //In here set all of the values of the form.
  // this.state.value='';

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
    // <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

    return(
      <div>
        <div style={submitStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Something:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <label>
          Pick your Star Sign:
          <select value={this.state.sign} onChange={this.handleSignChange}>
            <option value="Capricorn">Capricorn</option>
            <option value="Aries">Aries</option>
            <option value="Libra">Libra</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>

        <div>
        <Graphics answer={this.textValue} starSign={this.sign} submit={this.handleSubmit}/>
       </div>
      </div>

    );

  }

}

export default Form;
