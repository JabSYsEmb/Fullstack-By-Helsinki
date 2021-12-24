import React, {useEffect,useState} from 'react'
import {CountryHtml,MatchesCountryHtml} from './components/CountryHtml'
import axios from 'axios';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('search for a country')
  const [showFound, setShowFound] = useState(false)
  const [country, setCountry] = useState(undefined)
  const [countries, setCountries] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(item => setData(item.data))
    console.log('return handler')
  },[])


  const searchHandler = (event) => {
    let search_value = event.target.value;
    setSearch(search_value)
    setCountry(data.find(item => isThoseStringIdenticalCaseInsensitive(item.name.common,search_value)))
    setCountries(data.filter(item => doesStringMatchStringCaseInsensitive(item.name.common,search_value)))
    setShowFound(false)
  }

  const isThoseStringIdenticalCaseInsensitive = (first_string, second_string) => first_string.toUpperCase() === second_string.toUpperCase()
  const doesStringMatchStringCaseInsensitive = (first_string, second_string) => first_string.toUpperCase().includes(second_string.toUpperCase())

  const searchBtnHandler = (event) => {
    event.preventDefault();
    setShowFound(true);
  }
  const cleanInput = (setState) => {
    setCountry(undefined)
    setShowFound(false)
    setState('')
  }
  return (
    <div>
      <h1>Hello World</h1>
      <form>
        <input value={search} onChange={searchHandler} onClick={()=>cleanInput(setSearch)}/>
        <button type="submit" onClick={searchBtnHandler}>search</button>
      </form>
      {!showFound && <MatchesCountryHtml data={countries}/>}
      {showFound && < CountryHtml country={country}/>}
    </div>
  );
}

export default App;
