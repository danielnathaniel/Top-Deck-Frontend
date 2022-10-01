//This is imported in view-single-deck.js -AF

const Nav2 = () => {
    return (
        <nav className='nav1'>
        
             <div className='back'>
             {/* Goes back to view-my-decks page */}
             <a href ='#'>BACK</a>               
            </div>
             <div className='create-a-deck-link-div'>
{/* Need to add route or whatever we end up doing to get user to Create A Deck page/pop-out- AF*/}
            <a href ='#'>ADD CARDS</a>
            </div>
        
        </nav>
    )
}

export default Nav2