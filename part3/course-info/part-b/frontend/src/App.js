import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const {REACT_APP_BACKEND, ...rest} = process.env;

console.log(rest)

function App() {
  const [data, setData] = useState(()=>{});
  const [msg,  setMsg]  = useState(()=>{});
  
  useEffect(() => {
    axios.get(`${REACT_APP_BACKEND}/api/notes`).then(res => {
      setData(res.data);
    });
  },[]);
  
  const btnClickMeHandler = () => {
    setMsg(() => "fuck you")
  };

  useEffect(() => () => setTimeout(btnClickMeHandler, 2000),[]);

  return (
    <>
      <h1 style={{visibility: msg ? 1:0}}>{msg}</h1>
      <div className="App">
        {data && data.map(note => <p className="note" key={note.id}> {note.content} </p>)}
      </div>
      <button onClick={btnClickMeHandler}>Click Me</button>
    </>
  );
}

export default App;
