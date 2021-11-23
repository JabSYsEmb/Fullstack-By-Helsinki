/*
* this difference between arrow function and normal function declaration
* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
* map(), foreach(), reduce() and filter() function
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/

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

const Total = (props) => {
  return(
    <p> {props.message} {props.contents.reduce((result,item) => (item.exercises + result),0)} </p>
  )
}

const Header  = (props) => <h1>{props.course}</h1>

const App = () => {
  const course = 'Half Stack application development'  
  let msg    = 'Number of exercises'
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
      < Total message={msg} contents={contents} />
    </div>
  )
}

export default App;