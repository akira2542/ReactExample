import React,{ Component } from 'react';

class StateTest extends Component {

    state = {
      text : "Hello Dolphin",
      numberOfPeople : [1,2,3],
      ID : 48454
    }

    changeState = (e) => {
      this.setState({text : e.target.value})
    }

    render() {
      return (
            <div>
              <h1>{this.state.text}</h1>
              <input type="text" onChange={this.changeState} value={this.state.text}></input>
            </div>
      )
    }
}

export default StateTest;