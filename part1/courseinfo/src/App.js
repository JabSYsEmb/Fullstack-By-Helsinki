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
    <h2>{course.counter.msg}  {course.counter.counterState} </h2>
    <button onClick={course.counter.increaseByOne}>plus</button>
    <button onClick={course.counter.setToZero}>zero</button>
    <button onClick={course.counter.decreaseByOne}>sub</button>
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
      counterState  : useState(0), //[]
      setToZero     : () => course.counter.counterState[1](0),
      increaseByOne : () => course.counter.counterState[1](course.counter.counterState[0] + 1),
      decreaseByOne : () => course.counter.counterState[1](course.counter.counterState[0] - 1),
      msg           : "items :"
    }
  }
  
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