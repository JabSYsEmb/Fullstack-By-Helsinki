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

const Counter = ({msg, counterState}) => <h2>{msg} {counterState}</h2>

const Button = ({onClick, msg}) => <button onClick={onClick}>{msg}</button>

const History = ({allClicks}) => {
  console.log(allClicks);
  if(allClicks.length === 0) {
    return (
      <div> 
        the app is used by pressing the buttons      
      </div>
    )
  }
  return (
  <div>
    Pressed Buttons until now : {allClicks.join('-')}
  </div>
  )
}

// const App = () => {
//   // const course = {
//   //   name  : 'Half Stack application development', 
//   //   msg   : 'Number of exercises',
//   //   parts : [
//   //     {
//   //       part      : 'Fundamentals of React',
//   //       exercises : 11
//   //     },
//   //     {
//   //       part      : 'Using props to pass data',
//   //       exercises : 7
//   //     },
//   //     {
//   //       part      : 'State of a component',
//   //       exercises : 14
//   //     }
//   //   ],
//   //   counter   : {
//   //     counterState  : useState(0), //[]
//   //     setToZero     : () => course.counter.counterState[1](0),
//   //     increaseByOne : () => course.counter.counterState[1](course.counter.counterState[0]+ 1),
//   //     decreaseByOne : () => course.counter.counterState[1](course.counter.counterState[0] - 1),
//   //     msg           : "items :"
//   //   }
//   // }
//   // const [clicks, setClicks]= useState({
//   //   right: 0,
//   //   left : 0
//   // })
//   // const setBothTozero      = () => setClicks({
//   //   right: 0,
//   //   left : 0
//   // })
//   // const increaseLeftByOne  = () => setClicks({
//   //   ...clicks,
//   //   left : clicks.left + 1
//   // })
//   // const increaseRightByOne = () => setClicks({
//   //   ...clicks,
//   //   right : clicks.right + 1
//   // })
  
//   // return (
//   //   <div className="App-header">
//   //     < Counter msg={course.counter.msg} counterState={course.counter.counterState} />
//   //     <div className="center">
//   //       < Button onClick={course.counter.increaseByOne} msg="increaseByOne" />
//   //       < Button onClick={course.counter.setToZero} msg="setToZero" />
//   //       < Button onClick={course.counter.decreaseByOne} msg="decreaseByOne" />
//   //     </div>
//   //     < Counter msg="left-counter :" counterState={clicks.left} />
//   //     < Counter msg="right-counter :" counterState={clicks.right} />
//   //     <div className="center">
//   //       < Button onClick={increaseLeftByOne} msg="increseLeftByOne" />
//   //       < Button onClick={setBothTozero} msg="setBothTozero" />
//   //       < Button onClick={increaseRightByOne} msg="increaseRightByOne" />
//   //     </div>
//   //   </div>
//   // )

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const handleLeftClick = () => {    setAll(allClicks.concat('L'));    setLeft(left + 1) }
//   const handleRightClick = () => {    setAll(allClicks.concat('R'));   setRight(right + 1)  }
  
//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} msg="left" />
//       <Button onClick={handleRightClick} msg="right" />
//       {right}
//       < History allClicks={allClicks} />   
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {    
    const handler = () => {      
      console.log('hello', who)    
    };    
    return handler  
  }
  
  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>      
      <button onClick={hello('react')}>button</button>      
      <button onClick={hello('function')}>button</button>    
    </div>
  )
}
export {Part};

export  {App};