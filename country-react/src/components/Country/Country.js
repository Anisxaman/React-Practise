import React from 'react';
import "./Country.css"

const Country = (props) => {

    const{name,capital,region}=props.country;


    console.log(props);

    return (
        // <div className="single ">
         <div className="margin col-3   bg-info p-4 rounded-3  ">
            {/* <img src={props.country.flag} alt="" /> */}
            <h2><span className="text-dark fw-bolder fs-1">Name:</span> {name}</h2>
            <p><small className="fw-bold">Capital:{capital}</small></p>
            <p><small>Region:{region}</small></p>
         </div>
    );
};

export default Country;