import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


console.log(process.env);

const {REACT_APP_BACKEND} = process.env;


function App() {
  const [data, setData] = useState(()=>{});
  
  useEffect(() => {
    axios.get(`${REACT_APP_BACKEND}/api/notes`).then(res => {
      setData(res.data);
    });
  },[]);

  return (
    <div className="App">
      {data && data.map(note => <p className="note" key={note.id}> {note.content} </p>)}
    </div>
  );
}

export default App;
