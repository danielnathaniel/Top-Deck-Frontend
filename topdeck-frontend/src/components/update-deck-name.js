//This is imported in view-single-deck.js -AF

//This is imported in view-single-deck.js -AF

// idea is to have this go to the update form -AF
const handleUpdateForm = ()=>{
    console.log('to update form button clicked')
    }

    const UpdateDeck = () => {
        return (
            <div className='delete-btn'>
                <button onClick={handleUpdateForm}>EDIT DECK NAME</button>
            </div>
        )
    }
    
    export default UpdateDeck