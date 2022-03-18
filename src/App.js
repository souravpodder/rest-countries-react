import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className='App'>
      <Countries></Countries>
    </div>
  );
}

// load countries using api 
/* function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  return(
    <div>
        <h4>No of countries: {countries.length}</h4>
        {countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)}
    </div>
  )
} */

/* function Country(props){
  return(
    <div>
      <h3>Name: {props.name} </h3>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */

export default App;
