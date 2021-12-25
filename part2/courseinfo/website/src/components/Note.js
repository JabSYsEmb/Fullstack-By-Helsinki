import React from 'react'
import '../style/note.css'

const NotesHtml = ({notes,toggleImportance}) => {
    return (
        <ul>
            {notes.map(note => <Note key={note.id} note={note} toggleImportance={toggleImportance}/>)}
        </ul>
    )
}

const Note = ({note,toggleImportance}) => {
    const label = note.important ? "make not important":"make important"
    
    return (
        <li className="note-item">
            {note.content}
            <button className="importance" onClick={() => toggleImportance(note)}>{label}</button>
        </li>
    )
}

export default NotesHtml;