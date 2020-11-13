// Form.js
import React from 'react';
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
          <input type="submit" value="Submit" />

          <label>
          Pick your favorite flavor:
          <select value={this.state.sign} onChange={this.handleSignChange}>
            <option value="Capricorn">Capricorn</option>
            <option value="Aries">Aries</option>
            <option value="Libra">Libra</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        </form>
        </div>
      </div>

    );

  }

}

export default Form;
