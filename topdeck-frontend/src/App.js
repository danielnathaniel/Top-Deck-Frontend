//imports
import React, {Component} from 'react'
import './App.css';
import Landing from './landing'
import List from './view-my-decks';

//refactor App to be a Class based component since we'll likely need state- AF
class App extends Component {
  render(){
  return (
    <div className='App'>
      {/* <Landing /> */}
     <List />
    </div>
  );
}
}

export default App;
