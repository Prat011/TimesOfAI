import React from 'react';

const countries = [
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'in', name: 'India' },
  { code: 'au', name: 'Australia' },
  { code: 'ca', name: 'Canada' },
  { code: 'fr', name: 'France' },
  { code: 'de', name: 'Germany' },
  { code: 'it', name: 'Italy' },
  { code: 'jp', name: 'Japan' },
  { code: 'br', name: 'Brazil' },
];

const CountrySelector = ({ selectedCountry, onCountryChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="country" className="text-sm font-medium text-gray-700">
        Select Region:
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
