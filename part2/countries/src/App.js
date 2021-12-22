import React, {useEffect,useState} from 'react';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('search for a country')
  const [countries, setCountries] = useState([])
  const [founds, setFound] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(item => setCountries(item.data))
    console.log('return handler')
  },[])

  useEffect(() => {
    setFound(countries.find(item => item.name.common === search))
    console.log('search handler',founds)
  },[search])

  const searchHandler = (event) => {
    setSearch(event.target.value)
    setFound(countries.find(item => item.name.common === event.target.value))
  }
  const cleanInput = (setState) => {
    setState('')
  }
  
  return (
    <div>
      <h1>Hello World</h1>
      <input value={search} onChange={searchHandler} onClick={()=>cleanInput(setSearch)}/>
    </div>
  );
}

export default App;
