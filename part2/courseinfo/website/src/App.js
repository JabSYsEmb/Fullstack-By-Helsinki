import React, {useEffect, useState} from 'react'
import services from './services/communication'
import NotesHtml from './components/Note'
import Form from './components/Form'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note')
  
  const addNewNote = (event) => {
    event.preventDefault()
    const newDataInstance = {
      date:       new Date().toString(),
      content:    newNote,
      important:  Math.random() < 0.5
    }
    services.create(newDataInstance).then(response => handleResponseFromServer(response))
  }

  const handleResponseFromServer = (response) => {
    setNotes(notes.concat(response))
    setNewNote('')
  }
  
  useEffect(() => {
    services.getAll().then((promises) => {setNotes(promises)})
  }, [])
  
  const newNoteChangeHandler = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (note) => {
    let changedNote = {...note, important: !note.important}
    services.update(note.id,changedNote).then(response => {
      setNotes(notes.map(item => item.id === response.id ? changedNote : item))
    }).catch(
      error => {
        alert(`the note '${note.content}' was already deleted from server\n${error}`)
        setNotes(notes.filter(n => n.id !== note.id))
      }
    )
  }

  return (
    <>
      <NotesHtml notes={notes} toggleImportance={toggleImportanceOf} />      
      <Form newNote={newNote} onChange={newNoteChangeHandler} onClick={addNewNote} />
    </>
    )
}

export default App;
