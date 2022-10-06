
import React, {Component} from 'react'
import './index.css'
import Nav4 from './components/nav4'
import Card from './components/single-card-view'

class PokeView extends Component {
  render(){
    return (
      <>
        <Nav4 />
        <h1>I CHOOSE YOU!</h1>

        <Card />
        <div>
        There are words here to appease REACT
          {/* <a href='#'>Add Card</a> /* potential to add function to control how many you add */}
        </div>
      </>
    )
  }
}

export default PokeView
