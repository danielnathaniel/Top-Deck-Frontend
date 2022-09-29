//Nav for View-My-Decks page -AF
const Nav1 = () => {
    return (
        <div className='nav1'>
             <div className='logo-nav1-div'>
{/* Need to resize image -AF */}
                <img className ='logo-mg'src='/images/Logo.png' alt='Top Deck Logo'/>
            </div>
             <div className='create-a-deck-link-div'>
{/* Need to add route or whatever we end up doing to get user to Create A Deck page/pop-out- AF*/}
            <a href ='#'>CREATE A DECK</a>
            </div>
        </div>
    )
}

export default Nav1