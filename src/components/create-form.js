import React, {Component} from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3002'
} else {
  baseURL = 'http://localhost:3002'
}


class CreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''}
  }
  // function called every keystroke -AF 
  handleChange = (event) => {
    //grabs value and writes them to state- AF
    this.setState({
      name: event.target.value
    })
  }
  //called when user submits the form - post and update state - AF
  handleSubmit = (event) => {
    // prevent refresh default- so fetch will run -AF
    event.preventDefault()
    fetch(baseURL + '/decks', {
      method: 'POST',
      //send data as a string-AF
      body: JSON.stringify({name: this.state.name}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      //set state using resJson
        console.log('NewForm - resJson', resJson) 
        //set back to default-so it clears entry 
        this.setState({
          name: ''
        })
    })
  }
  
  render () {
    return (
<form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="add a deck"
                />
                <input type="submit" value="Add a Deck to your list!" />
            </form>
        )
    
  }
}

   
    
  
  export default CreateForm;