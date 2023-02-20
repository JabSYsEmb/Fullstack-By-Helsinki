import React, {useState, useEffect} from 'react';
import axios from 'axios';

import BlogContainer from './components/BlogContainer.jsx';

const baseURL = 'http://localhost:3003/api/blogs';

function App() {
  const [listOfBlogs, useListOfBlogs] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        return data; 
      })
      .then(data => useListOfBlogs(data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(listOfBlogs);
  return (
    <div className="App">
      {listOfBlogs.length !== 0 ? 
        <BlogContainer listOfBlogs={listOfBlogs}/>
        :
        <p>Fuck you</p>
      }
      <header className="App-header">Hello world!</header>
    </div>
  );
}

export default App;
