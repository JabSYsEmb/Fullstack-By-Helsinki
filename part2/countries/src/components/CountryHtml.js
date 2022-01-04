import React from 'react'
import {NoDataHtml,TooMuchData,isLengthSmallerThen} from './utils'

const MatchesCountryHtml = ({data}) => 
      isLengthSmallerThen(data.length,10) ? data.map((item, index )=> <CountryName key={index} country={item}/>):<TooMuchData />
const CountryName = ({country}) => <p>{country.name.common}</p>

const CountryHtml = ({country}) => country ? <Country country={country}/>:<NoDataHtml/>

const Country = ({ country }) => (
  <>
    <h2>{country.name.common}</h2>
    <div className="country-info">
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([key, language]) => (
          <li key={key}>{language}</li>
        ))}
      </ul>
      <img
        className="flag-class"
        src={country.flags.svg}
        alt={country.name.common}
      />
    </div>
  </>
);

export {CountryHtml,MatchesCountryHtml};