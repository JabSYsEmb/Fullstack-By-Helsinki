import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

const MatchesCountryHtml = ({data}) => 
      isLengthSmallerThen(data.length,10) ? data.map((item, index )=> <CountryName key={index} country={item}/>):<TooMuchData />
const TooMuchData = () => <p className="no-data">Too many countries</p>
const CountryName = ({country}) => <p>{country.name.common}</p>
const isLengthSmallerThen = (length,then) => length < then;

const CountryHtml = ({country}) => country ? <Country country={country}/>:<NoDataHtml/>
const NoDataHtml = () => <p className="no-data">No data has been found.</p>
const Country = ({country}) => {
return (
<>
  <CountryHeader country={country} />
  <CountryInfo country={country}/>
  <CountrySpokenLangauge country={country} />
  <CountryFlag country={country}/>
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
const CountryFlag = ({country}) => <img className="flag-class" src={country.flags.svg} alt="country-flag"/>


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
    setSearch(event.target.value)
    setCountry(data.find(item => isThoseStringIdentical(item.name.common,event.target.value)))
    setCountries(data.filter(item => doesStringMatchString(item.name.common,event.target.value)))
    setShowFound(false)
  }

  const isThoseStringIdentical = (first_string, second_string) => first_string === second_string;
  const doesStringMatchString = (first_string, second_string) => first_string.includes(second_string);
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
      {showFound ? <></>:<MatchesCountryHtml data={countries}/>}
      {showFound ? < CountryHtml country={country}/>:<></>}
    </div>
  );
}

export default App;
