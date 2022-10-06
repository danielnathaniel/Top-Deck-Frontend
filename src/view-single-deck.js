//imports
import React, {Component} from 'react'
import './index.css';
import Nav2 from './components/nav2';
import DeckList from './components/deck-list';
import Delete from './components/delete-card';
import UpdateDeckBtn from './components/update-deck-btn';
import baseUrl from "./baseUrl";

class Deck extends Component {
  handleClick=(cardId)=>{
    fetch(`${baseUrl}/cards/${cardId}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
 render(){
 return (
  // we need to create a map to go through the cards which will create the cardIds and then it will no longer say cardId is not undefined
  // if we do fetch here then it would be this.state 
  // pseudocode: {
//   this.state.cards.map((card) => {
//     return (
//        <div>
//          Card name {card.name}
//          <Delete cardId={card.id} />
//        <div>
//     )
//   })
// }

//we can do mock the result and hard code:
//this.state = {
//   cards: [
//     {
//       name: 'Test name',
//       id: 'test id'
//     }
//   ]
// }
// the map should create a delete button for each card

    <>
     <Nav2 />
   <h1>MY DECKS</h1>
    <div>
    <UpdateDeckBtn />
    </div>
   {/* Delete needs to be applied to each card */}
   <div>

<Delete onClick={
    ()=>
      this.handleClick("cardId") 
      // take off the quotes on cardId above
      // put the numbers from the cardid above and it will work
    
    } /> 

   </div>
   <div>
    <DeckList />
   </div>
   </>
 );
}
}
 
export default Deck;