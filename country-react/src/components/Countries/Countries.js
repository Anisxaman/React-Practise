import React, { useEffect ,useState} from 'react';
// import { useState } from 'react';
import Country from '../Country/Country';

import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR0_SMs5g5QRC9akD7d2jR1lp1-5R9gJS8Tqhld9OX61NNWDjzvkTbuYNMY')
    .then(res=>res.json())
    .then(data=>setCountries(data));
      
    }, [])

    return (
<div  >
<h2>Traveling around the worls!!</h2>
                <h4 >Countries Available: {countries.length}</h4>


    
     {/* <div className='contry-container' > */}
<div className='mx-auto'>
<div className='row  mt-5' >

                
            
{
    countries.map(country=><Country 
        key={country.alpha2Code}
        country={country}></Country>)
}

</div>
</div>
    

</div>
    );
};

export default Countries;