import Header from './Header';
import Content from './Content';

const Total = (props) => <b>Total of {props.course.parts.reduce((result,item) => (item.exercises + result),0)} exercises</b>

const Course = ({course}) => 
(
    <>
      < Header  course={course} />
      < Content course={course} />
      < Total   course={course} />
    </>
)

export default Course;