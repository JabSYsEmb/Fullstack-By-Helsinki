import React from 'react';
//  import './App.css';

function Part(props) {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

function Content(props) {
  return (
    <>
      {
        props.contents.map((item) => (
          <Part part={item.part} exercise={item.exercises}/>
        ))
      }
    </>
  )
}

function Total(props) {
  return(
    <p> Number of exercises {props.contents.reduce((res,item) =>(item.exercises + res),0)} </p>
  )
}

const Header  = (props) => <h1>{props.course}</h1>

const App = () => {
  const course = 'Half Stack application development'  
  let contents = [
    {
      part      : 'Fundamentals of React',
      exercises : 10
    },
    {
      part      : 'Using props to pass data',
      exercises : 7
    },
    {
      part      : 'State of a component',
      exercises : 14
    }
  ];

  return (
    <div className="App-header">
      < Header course={course} />
      < Content contents={contents}/>
      < Total contents={contents} />
    </div>
  )
}

export default App;