import React from 'react'
import '../style/note.css'

const NotesHtml = ({notes,toggleImportance,deleteById}) => {
    return (
        <ul>
            {notes && notes.map(note => 
            < Note key={note.id} note={note} toggleImportance={toggleImportance} deleteById={deleteById} />)}
        </ul>
    )
}

const Note = ({note,toggleImportance,deleteById}) => {
    const label = note.important ? "make not important":"make important"

    return (
        <li className="note-item">
            {note.content}
            <button className="importance" onClick={() => toggleImportance(note)} >{label}</button>
            <button className="delete-button" onClick={() => deleteById(note.id)} >delete</button>
        </li>
    )
}

export default NotesHtml;