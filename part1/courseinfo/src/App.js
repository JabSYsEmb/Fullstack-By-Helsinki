/*
* this difference between arrow function and normal function declaration
* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
* map(), foreach(), reduce() and filter() function
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/

import React from 'react';
import './App.css';


const Part = (props) => <p > {props.part.part} {props.part.exercises} </p>

const Content = (props) => <> {props.course.parts.map((item) => (<Part part={item} />))} </>

const Total = (props) => <p> {props.course.msg} {props.course.parts.reduce((result,item) => (item.exercises + result),0)} </p>

const Header  = (props) => <h1>{props.course.name}</h1>

const Counter = (props) => <h2> counter : {props.counter}</h2>

const App = (props) => {
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
    refresh_num   : 0
  };
  
  return (
    <div className="App-header">
      < Counter counter={props.counter} />
      < Header  course={course} />
      < Content course={course} />
      < Total   course={course} />
    </div>
  )
}

const increse_refresh_num = () => {this.course.refresh_num+=1}

const exporter ={
  App,
  increse_refresh_num
}

export default exporter;