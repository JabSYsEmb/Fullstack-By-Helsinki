/*
* this difference between arrow function and normal function declaration
* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
* map(), foreach(), reduce() and filter() function
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/

import React, { useState } from 'react';
import './App.css';


const Part = (props) => <p > {props.part.part} {props.part.exercises} </p>

const Content = (props) => <> {props.course.parts.map((item) => (<Part part={item} />))} </>

const Total = (props) => <p> {props.course.msg} {props.course.parts.reduce((result,item) => (item.exercises + result),0)} </p>

const Header  = (props) => <h1>{props.course.name}</h1>

const Counter = ({course}) => {

  return(
  <>
    <h2>{course.counter.msg}  {course.counter.counter} </h2>
  </>)
}

const App = () => {

  const course = {
    name  : 'Half Stack application development', 
    msg   : 'Number of exercises',
    parts : [
      {
        part      : 'Fundamentals of React',
        exercises : 11
      },
      {
        part      : 'Using props to pass data',
        exercises : 7
      },
      {
        part      : 'State of a component',
        exercises : 14
      }
    ],
    counter   : {
      counter : useState(0),
      msg     : "items :"
    }
  }
  
  setTimeout(() => course.counter.counter[1](course.counter.counter[0] + 1),500)

  console.log('rendering...', course.counter.counter)
  return (
    <div className="App-header">
      < Header  course={course} />
      < Content course={course} />
      < Total   course={course} />
      < Counter course={course} />
    </div>
  )
}


export default App;