//imports
import './App.css';
import './index.css';

// idea is to have handleClick direct user to view-my-decks page-AF
const handleClick = ()=>{
console.log('button clicked')
}
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
            <button onClick={handleClick}>CLICK HERE TO GET STARTED</button>
        </div>
    )
}

export default Landing