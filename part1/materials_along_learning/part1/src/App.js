import React from 'react';
//  import './App.css';

function Part(props) {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
function Content(props) {
  return(
    <>
    <Part part={props.part1} exercises={props.exercises1}/>
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={props.exercises3}/>
    </>
  )
}

const Header  = (props) => <h1>{props.course}</h1>
const Total   = (props) => <p>Number of exercises {props.exercises}</p>

function App() {
  const course = 'Half Stack application development'
  let exercises = {
    content1 : {
      part      : 'Fundamentals of React',
      exercises : 10,
    },
    content2 : {
      part      : 'Using props to pass data',
      exercises : 7
    },
    content3 : {
      part      : 'State of a component',
      exercises : 14
    }
  }
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App-header">
      < Header course={course} />
      < Content part1={part1} exercises1={exercises1} 
                part2={part2} exercises2={exercises2}
                part3={part3} exercises3={exercises3} />
      < Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;