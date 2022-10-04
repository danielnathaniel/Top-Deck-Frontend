//This is imported in view-my-decks.js -AF
import { Link } from 'react-router-dom';

const Nav1 = () => {
    return (
        <nav className='nav1'>
        
             <div className='logo-nav1-div'>
{/* Need to resize image -AF */}
                <img className ='logo-mg'src='/images/Logo.png' alt='Top Deck Logo'/>
            </div>
            <div>
            <Link to='/create-deck'>CREATE A DECK</Link>
        </div>
        
        </nav>
    )
}

export default Nav1