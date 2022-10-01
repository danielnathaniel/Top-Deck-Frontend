//This is imported in view-single-deck.js -AF

// idea is to have this delete the card from deck list db -AF
  const handleDelete = ()=>{
    console.log('delete button clicked')
    }

    const Delete = () => {
        return (
            <div className='delete-btn'>
                <button onClick={handleDelete}>DELETE SINGLE CARD</button>
            </div>
        )
    }
    
    export default Delete