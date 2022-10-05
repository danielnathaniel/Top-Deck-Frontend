//This is imported in view-my-decks.js -AF

//imports
import React, {Component} from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'
} else {
  baseURL = 'your heroku bakend url here'
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log('current base URL:', baseURL)

class Decks extends Component {
    //add state
 constructor(props){
  super(props)
  this.state = {
    //expect data to come back as an array? - need to just have the name
Deck: []
  }
}

//lifecycle - only run once when the component is mounted for the first time
componentDidMount(){
  this.getDeck()
}
 getDeck = () =>{
  fetch(baseURL + '/decks')
  .then((res) => {
    //if successful return json
    if (res.status === 200) {
     return res.json();
    } else {
     return [];
    }
   })
   .then((data) => {
    console.log(data);
    this.setState({ decks: data.decks });
   });
 }
  render(){
  return (
    <div className='DeckList'>
  {/* info for single deck list needs to come from db- data comes from create-form. AF   */}
  <table>
<tbody>
  {/* { this.state.deck.map(deck=> {
      return (
        <tr key={deck._id} >
          <td> {deck.name }</td>
        </tr>
      )
    })

  } */}
</tbody>
</table>
    </div>
  );
}
}

  
  export default Decks;