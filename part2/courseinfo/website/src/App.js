import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3002/notes')
    .then((promises) => 
    {
      console.log('effect fullfilled')
      setNotes(promises.data)
    })
  }, [])

  useEffect(() => {document.title = `${count} times clicked`})
  
  console.log('render',notes.length, 'notes');

  return (
    <>
      <p>You clicked {count} times no this button.</p>
      <ul>
        {notes.map(item => <li key={item.id}>{item.content}</li>)}
      </ul>
      <button onClick={()=>setCount(count+1)}>click me</button>
      {console.log('rendered')}
    </>
    )
}

export default App;
