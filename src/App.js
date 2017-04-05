import React from 'react';
import './App.css'

class App extends React.Component {

  state = {
    inputText: ''
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="container notification">
          <div className="field has-addons has-addons-centered">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="I'm here!"
                value={this.state.inputText}
                onChange={this.handleChangeText}/>
            </p>
            <p className="control">
              <button className="button">
                Add
              </button>
            </p>
          </div>
        </div>

        {this.state.inputText != '' && <div className="notification is-info">
          <h2>{this.state.inputText}</h2>
        </div>}

      </div>
    );
  }
}

export default App;
