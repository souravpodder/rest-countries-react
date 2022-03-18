import React from 'react';
import './Country.css'

const Country = (props) => {
  // console.log(props.country);
  const {capital, area, region, flags, name} = props.country;
  return (
    <div className='country'>
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      {/* <p>Languages: {languages}</p> */}
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;