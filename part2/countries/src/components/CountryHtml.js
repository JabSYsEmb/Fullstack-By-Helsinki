import React from 'react'
import {NoDataHtml,TooMuchData,isLengthSmallerThen} from './utils'

const MatchesCountryHtml = ({data}) => 
      isLengthSmallerThen(data.length,10) ? data.map((item, index )=> <CountryName key={index} country={item}/>):<TooMuchData />
const CountryName = ({country}) => <p>{country.name.common}</p>

const CountryHtml = ({country}) => country ? <Country country={country}/>:<NoDataHtml/>

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

export {CountryHtml,MatchesCountryHtml};