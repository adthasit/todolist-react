import React from 'react';
import './App.css'

class App extends React.Component {

  state = {
    inputText: '',
    listItem: []
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  addList = () => {
    this.setState({
      listItem: this
        .state
        .listItem
        .concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addList();
    }
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
                onChange={this.handleChangeText}
                onKeyPress={this.handleKeyPress}/>
            </p>
            <p className="control">
              <button className="button" onClick={this.addList}>
                Add
              </button>
            </p>
          </div>
        </div>

        {this.state.inputText != '' && <div className="notification is-info">
          <h2>{this.state.inputText}</h2>
        </div>}

        <aside className="menu">
          <ul className="menu-list">
            {this.state.listItem.map(( value, index ) => {
              return (
                <li className="space-1" key={ index + value }>{ value }<span className="space-1">
                  <button className="delete"></button></span>
                </li>
              )
            })}
            
          </ul>
        </aside>

      </div>
    );
  }
}

export default App;
