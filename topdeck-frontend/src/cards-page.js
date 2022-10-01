
import React, {Component from 'react'}
import './index.css'
// held off from making my own navs for now
import AllCards from './components/all-cards'
import Add from './components/add-card-btn' // we can move this if needbe

class Cards extends Component {
  render(){
    return (
      <>
        /* nav */
        <h1>View All Cards Here!</h1>
        <AllCards /> /* Add needs to be applied to each card */
        <Add />

      </>
    )
  }
}

export default Cards
