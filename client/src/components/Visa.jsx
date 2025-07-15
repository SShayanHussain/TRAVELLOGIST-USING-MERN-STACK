import React from 'react';
import './Visa.css'; 

const countries = [
  { code: 'us', name: 'USA' },
  { code: 'gb', name: 'UK' },
  { code: 'fr', name: 'France' },
  { code: 'de', name: 'Germany' },
  { code: 'pk', name: 'Pakistan' },
  { code: 'in', name: 'India' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'ca', name: 'Canada' },
];

const Visa = () => {
  return (
    
    <div className="container-Visa">
        <h2 className="visa-heading">Visas</h2>
        <div className="spiral-container">
            <span className="spiral ball-1"></span>
            <span className="spiral ball-2"></span>
            <span className="spiral ball-3"></span>
        </div>

        <div className="flag-grid-container">
            {countries.map((country) => (
            <div className="card columns" key={country.code}>
                <p className="secondary-heading">
                <span className={`fi fi-${country.code}`}></span>
                {country.name}
                </p>
            </div>
            ))}
        </div>
        </div>

    
  );
};

export default Visa;
