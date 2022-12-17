import Title from "./Title.js";
import Image from "./Image.js";
import Text from "./Text.js";

import "./BlogContainer.css";

const BlogContainer = ({listOfBlogs}) => {
  return (
    <ul className='blog-container' >
      {
        listOfBlogs.map(({title, img, content}) => {
          return (
            <li key={title + content} >
              <Title title={title} /> 
              <Image src={img}/> 
              <Text  content={content}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default BlogContainer;
