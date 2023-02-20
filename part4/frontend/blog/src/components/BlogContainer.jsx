import React from "react";
import Title from "./Title.jsx";
import Image from "./Image.jsx";
import Text from "./Text.jsx";

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
