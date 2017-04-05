import React from 'react';
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="container notification">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="I'm here!"/>
            </p>
            <p className="control">
              <button className="button">
                Add
              </button>
            </p>
          </div>
          <h2></h2>
        </div>
      </div>
    );
  }
}

export default App;
