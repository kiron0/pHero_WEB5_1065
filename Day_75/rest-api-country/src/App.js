import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Person></Person>
      <Countries></Countries>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h2>Visiting Every Country Of The World!</h2>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name} nativeName={country.nativeName} region={country.region} area={country.area} flag={country.flag} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div className='country'>
      <img src={props.flag} alt="" />
      <h4>Name: {props.name}</h4>
      <p>Native Name: {props.nativeName}</p>
      <p>Capital: {props.capital}</p>
      <p>Region: {props.region}</p>
      <p>Area: {props.area}</p>
    </div>
  )
}

export default App;
