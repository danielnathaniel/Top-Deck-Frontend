//imports
import React, {Component} from 'react'
import './index.css';
import Nav1 from './components/nav1'
// import CreateForm from './components/create-form';
import Decks from './components/my-decks';
 
class List extends Component {
 render(){
 return (
    <>
     <Nav1 />
     {/* <CreateForm  handleAddDeck={this.handleAddDeck}/> */}
  <h1>MY DECKS</h1>
   <div>
    <Decks />
   </div>
   </>
 );
}
}
 
export default List;
