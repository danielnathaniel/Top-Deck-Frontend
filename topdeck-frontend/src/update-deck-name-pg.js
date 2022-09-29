//imports
import React, {Component} from 'react'
import './index.css';
import UpdateForm from './components/update-form';
 
class UpdatePg extends Component {
 render(){
 return (
    <>
    
   <h1>What do you want to change the deck name to?</h1>
   <div>
   <UpdateForm />
   </div>
   </>
 );
}
}
 
export default UpdatePg;