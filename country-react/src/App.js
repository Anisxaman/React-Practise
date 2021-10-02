// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <h1 className="text-danger fs-1 fw-bold ">My first react </h1>
      <Countries></Countries>

    </div>
  );
}





// function Countries(){

//   const [countries, setCountries] = useState([]);
 


//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR0_SMs5g5QRC9akD7d2jR1lp1-5R9gJS8Tqhld9OX61NNWDjzvkTbuYNMY')
//     .then(res=>res.json())
//     .then(data=>setCountries(data));
   
//   }, [])


//   return(
//     <div>
//       <h2>Traveling around the worls!!</h2>
//       <h4 >Countries Available: {countries.length}</h4>
//       {
//         countries.map(country=><Country title={country.name}  capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return( 
//      <div>
//     <h2>Name:{props.title}</h2>
//     <p><small>Capital:{props.capital}</small>
//         </p>
//     </div>
//     )
   
  

// }















export default App;
