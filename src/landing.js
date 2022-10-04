//imports
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';




const Landing = () => {
    return (
        <div className='landing'>
             <h1>Top Deck</h1>
            <div className='landing-logo-div'>
                <img src='/images/Logo.png' alt='Top Deck Logo'/>
            </div>
             <div className='landing-info-div'>
            <h2>Build your own Pokemon decks from a database of Pokemon cards!
                This includes cards from the base deck through Sword and Shield.</h2>
            </div>
            <Link to='/deck-lists'>CLICK HERE TO GET STARTED</Link>
        </div>
    )
}

export default Landing