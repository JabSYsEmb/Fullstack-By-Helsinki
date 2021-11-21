import React from 'react';
import './App.css';

const Ahmed = (props) => {
  return(
    <p>My name is {props.name}!</p>
  )
}

function App() {
  return (
    <div>
      <div className="App-header">
        <p>Hello, world! we are in a shity world.</p>
        <Ahmed name="rami" date={Date()} wieght="75Kg"/>
      </div>
    </div>
  );
}

export default App;