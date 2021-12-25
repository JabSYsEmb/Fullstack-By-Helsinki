import React from 'react'

const From = ({newNote,onChange,onClick}) => {
    
    return (
        <form >
            <input value={newNote} onChange={onChange}/>
            <button type="submit" onClick={onClick}>add note</button>
        </form>
    )
}

export default From;