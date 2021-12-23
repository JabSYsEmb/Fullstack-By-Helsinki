import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

const CountryHtml = ({country}) => country ? <Country country={country}/>:<NoDataHtml />
const NoDataHtml = () => <p className="no-data">No data has been found.</p>
const Country = ({country}) => {
return (
<>
  <CountryHeader country={country} />
  <CountryInfo country={country}/>
  <CountrySpokenLangauge country={country} />
  <CountryFlag url={country.flags.svg}/>
</>)
}

const CountryHeader = ({country}) => <h2>{country.name.common}</h2>
const CountryInfo   = ({country}) => {
  return (
  <div className="country-info" >
    <p>Capital : {country.capital[0]}</p>
    <p>population : {country.population}</p>
  </div>
  )
}

const CountrySpokenLangauge = ({country}) => {
  return (
    <>
      <h2>Languages</h2>
      <ul>
        {< Langauges languages={country.languages}/>}
      </ul>
    </>
  )
}
const Langauges = ({languages}) => {
  const langs = [];
  for (const lang in languages) {
    langs.push(<li key={lang}>{languages[lang]}</li>)
  }
  return langs;
}
const CountryFlag = ({url}) => <img className="flag-class" src={url} alt="country-flag"/>


const App = () => {
  const [search, setSearch] = useState('search for a country')
  const [showFound, setShowFound] = useState(false)
  const [country, setCountry] = useState(undefined)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(item => setCountries(item.data))
    console.log('return handler')
  },[])

  const searchHandler = (event) => {
    setSearch(event.target.value)
    setCountry(countries.find(item => item.name.common === event.target.value))
    setShowFound(false)
  }

  const formOnSubmit = (event) => {
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
        <button type="submit" onClick={formOnSubmit}>search</button>
        <button type="submit" onClick={formOnSubmit}>match</button>
      </form>
      {showFound ? < CountryHtml country={country}/>:<></>}
    </div>
  );
}

export default App;
