import React, { useState } from 'react'
import '../style/note.css'

const NotesHtml = ({notes}) => {
    return (
        notes.map(item => <Note key={item.id} note={item} />)
    )
}

const Note = ({note}) => {
    const [show, setShow] = useState(false);
    
    const label = note.important ? "important note":"not important note"
    return (
        <li className="note-item">
            {note.content}
            <button onClick={()=>setShow(!show)}>showImportance</button>
            <p className={show ? "important":"not-important"}>{label}</p>
        </li>
    )
}

export default NotesHtml;