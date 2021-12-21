import React from 'react';
import Part from './Part';

const Content = (props) => <> {props.course.parts.map((item) => (<Part key={item.id} part={item}/>))} </>

export default Content;