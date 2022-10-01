//imports
import React, {Component} from 'react'
import './index.css';
import CreateForm from './components/create-form';
 
class CreatePg extends Component {
 render(){
 return (
    <>
    
   <h1>Create form</h1>
   <div>
   <CreateForm />
   </div>
   </>
 );
}
}
 
export default CreatePg;