//This is imported in view-single-deck.js -AF
import { Link } from 'react-router-dom';

const Nav2 = () => {
    return (
        <nav className='nav1'>
        
        <div>
            <Link to='/deck-lists'>BACK</Link>
        </div>
            <div>
            <Link to='/view-all-cards'>ADD CARDS</Link>
        </div>
        </nav>
    )
}

export default Nav2