/*
* this difference between arrow function and normal function declaration
* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
* map(), foreach(), reduce() and filter() function
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/

import React from 'react';
//  import './App.css';


function Part(props) {
  console.log(props)
  return(
    <p>
      {props.part.part} {props.part.exercises}
    </p>
  )
}


function Content(props) {
  return (
    <>
      {
        props.course.parts.map((item) => (
          <Part part={item} />
        ))
      }
    </>
  )
}

const Total = (props) => {
  return(
    <p> {props.course.msg} {props.course.parts.reduce((result,item) => (item.exercises + result),0)} </p>
  )
}

const Header  = (props) => <h1>{props.course.name}</h1>

const App = () => {
  const course = {
    name  : 'Half Stack application development', 
    msg   : 'Number of exercises',
    parts : [
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
    ]
  };

  return (
    <div className="App-header">
      < Header  course={course} />
      < Content course={course} />
      < Total   course={course} />
    </div>
  )
}

export default App;