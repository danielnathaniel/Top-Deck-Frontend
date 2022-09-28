//imports
import React, {Component} from 'react'
import './App.css';
import Landing from './landing'

//refactor App to be a Class based component since we'll likely need state- AF
class App extends Component {
  render(){
  return (
    <div className='App'>
      <Landing />
      
    </div>
  );
}
}

export default App;
