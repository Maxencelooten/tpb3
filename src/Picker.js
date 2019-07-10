import React, { Component } from 'react';
import Calendar from 'react-calendar';


export default class Picker extends Component {

  state = {
    date : new Date()
  }

  onChange = date => {
    this.setState({
      date
    })
  }
  render() {
    return (<div>
      <Calendar
      onChange={this.onChange}
      />
      <p> Date : {this.state.date.toLocaleDateString()}</p>
    </div>
)
  }
}
