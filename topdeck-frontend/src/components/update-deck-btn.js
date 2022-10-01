//This is imported in view-single-deck.js -AF

// idea is to have this go to the update form -AF
const handleEditBtn = ()=>{
    console.log('to update form button clicked')
    }

    const UpdateDeckBtn = () => {
        return (
            <div className='delete-btn'>
                <button onClick={handleEditBtn}>EDIT DECK NAME</button>
            </div>
        )
    }
    
    export default UpdateDeckBtn