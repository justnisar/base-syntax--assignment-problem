import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import './UserOutput.css'

class App extends Component {

  state = {
    username : "LaVictoria"
  }

  manipulateHandler = (event) => {
    console.log('The manipulateHandler is called');
    this.setState({
      username : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li> <strike>Create TWO new components: UserInput and UserOutput </strike> </li>
          <li> <strike>UserInput should hold an input element, UserOutput two paragraphs </strike> </li>
          <li> <strike>Output multiple UserOutput components in the App component (any paragraph texts of your choice) </strike> </li>
          <li> <strike>Pass a username (of your choice) to UserOutput via props and display it there </strike></li>
          <li> <strike>Add state to the App component (=> the username) and pass the username to the UserOutput component </strike></li>
          <li> <strike>Add a method to manipulate the state (=> an event-handler method) </strike></li>
          <li> <strike>Pass the event-handler method reference to the UserInput component and bind it to the input-change event </strike></li>
          <li> <strike>Ensure that the new input entered by the user overwrites the old username passed to UserOutput </strike></li>
          <li> <strike>Add two-way-binding to your input (in UserInput) to also display the starting username </strike></li>
          <li> <strike>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets </strike></li>
        </ol>

        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserInput change={this.manipulateHandler} username={this.state.username}/>

      </div>
    );
  }
}

export default App;
