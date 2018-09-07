import React, { Component } from 'react';
import './UserOutput.css'
class UserOutput extends Component {
  render() {
    return (
      <div id="userOutput" className="UserOutput">
        <p> This is paragraph1. My name is {this.props.username}</p>

        <p> This is paragraph2</p>
      
      </div>
    );
  }
}

export default UserOutput;
