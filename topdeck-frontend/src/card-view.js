
import React, {Component} from 'react'
import './index.css'
/* Another nav */
import Card from './components/single-card-view'
import Add from './components/add-card-btn'

class PokeView extends Component {
  render(){
    return (
      <>
        /* another nav */
        <h1>I CHOOSE YOU!</h1>

        <Card />
        <div> /* function to only show Add btn if deck exists */
          <Add /> /* potential to add function to control how many you add */
        </div>
      </>
    )
  }
}

export default PokeView
