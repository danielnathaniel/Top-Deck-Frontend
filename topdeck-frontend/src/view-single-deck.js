//imports
import React, {Component} from 'react'
import './index.css';
import Nav2 from './components/nav2';
import DeckList from './components/deck-list';
import Delete from './components/delete-card';
import UpdateDeckBtn from './components/update-deck-btn';

class Deck extends Component {
 render(){
 return (
    <>
     <Nav2 />
   <h1>MY DECKS</h1>
    <div>
    <UpdateDeckBtn />
    </div>
   {/* Delete needs to be applied to each card */}
   <div>
    <Delete />
   </div>
   <div>
    <DeckList />
   </div>
   </>
 );
}
}
 
export default Deck;