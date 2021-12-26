import React from 'react'
import '../style/note.css'

const NotesHtml = ({notes,toggleImportance}) => {
    return (
        <ul>
            {notes && notes.map(note => <Note key={note.id} note={note} toggleImportance={toggleImportance}/>)}
        </ul>
    )
}

const Note = ({note,toggleImportance}) => {
    const label = note.important ? "make not important":"make important"
    const inline_style = {
        color: 'blue',
        backgroundColor:'black',
        textAlign:'left'
    }
    
    return (
        <li className="note-item">
            {note.content}
            <button className="importance"  style={inline_style} onClick={() => toggleImportance(note)}>{label}</button>
        </li>
    )
}

export default NotesHtml;