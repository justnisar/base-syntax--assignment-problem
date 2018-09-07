import React, { Component } from 'react';

class UserInput extends Component {

  render() {
    const style = {
        backgroundColor : 'pink'
      };

    return (
      <div id="userInput">
        <input id="inputElement" type="text" onChange={this.props.change} value={this.props.username} style={style}>
        </input>
      </div>
    );
  }
}

export default UserInput;
