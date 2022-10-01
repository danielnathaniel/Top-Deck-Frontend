// this will be imported to add-card.js as the
import React, {Component} from 'react'
import Add from './components/add-card-btn'


class AddCards extends Component {
  render() {
    return (
      <>
        <div className='AddCards'>
          <h1>Adding Card to Deck</h1>
        </div>

        <div className='DeckName'>
          /* function to include deck name */
        </div>
      </>
    )
  }
}

export default AddCards;
