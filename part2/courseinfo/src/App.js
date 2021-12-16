import Course from './components/Course';
import {useState} from 'react';

let data = [];

const xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200){
    console.log("done")
    JSON.parse(xhttp.responseText).map(item => data.push(item))
  }
}

xhttp.open('GET', 'http://localhost:3003/notes', true)
xhttp.send()

const App = () => {
  const [item, setItem] = useState(true);
  console.log(data)
  return (
    <>
    <h1>Data</h1>
    {data?.map(item => <p key={item.content}>{item.content}</p>)}
    <button onClick={() => setItem(!item)}>pressMe</button>
    </>
    )
}

export default App;
