/*
* this difference between arrow function and normal function declaration
* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
* map(), foreach(), reduce() and filter() function
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/

import React from 'react';
//  import './App.css';


const Part = (props) => <p> {props.part.part} {props.part.exercises} </p>


const Content = (props) => <p> {props.course.parts.map((item) => (<Part part={item} />))} </p>

const Total = (props) => <p> {props.course.msg} {props.course.parts.reduce((result,item) => (item.exercises + result),0)} </p>


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