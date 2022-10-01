
import React, {Component from 'react'}
import './index.css'
import Nav3 from './components/nav3'
import AllCards from './components/all-cards'
import Add from './components/add-card-btn' // we can move this if needbe

class Cards extends Component {
  render(){
    return (
      <>
        <Nav3 />
        <h1>View All Cards Here!</h1>
        <AllCards /> /* Add needs to be applied to each card */
        <Add />

      </>
    )
  }
}

export default Cards
