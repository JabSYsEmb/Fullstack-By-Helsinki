import React, {useEffect, useState} from 'react';
import axios from 'axios';

const jsonServerUrl = 'http://localhost:3002/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note')
  
  const addNewNote = (event) => {
    event.preventDefault()
    const newDataInstance = {
      id:         notes.length+1,
      date:       new Date().toString(),
      content:    newNote,
      important:  Math.random() < 0.5
    }
    postDataToTheServer(jsonServerUrl,newDataInstance)
  }

  const postDataToTheServer = (serverUrl, newData) => {
    axios.post(serverUrl,newData).then(
      response=>
        {
          setNotes(notes.concat(response.data))
          setNewNote('')
        }
      )
  } 
  
  useEffect(() => {
    axios.get(jsonServerUrl).then((promises) => {setNotes(promises.data)})
  }, [])
  
  const newNoteChangeHandler = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <>
      <ul>
        {notes.map(item => <li key={item.id}>{item.content}</li>)}
      </ul>
      <form >
        <input value={newNote} onChange={newNoteChangeHandler}/>
        <button type="submit" onClick={addNewNote}>add note</button>
      </form>
    </>
    )
}

export default App;
