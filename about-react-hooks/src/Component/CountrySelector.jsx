import React from 'react'
import City from './City';

export default function CountrySelector() {
    const countries = [
        { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai', 'Bangalore'] },
        { name: 'United States', value: 'US', cities: ['New York', 'Los Angeles', 'Chicago'] },
        { name: 'Canada', value: 'CA', cities: ['Toronto', 'Vancouver', 'Montreal'] },
        { name: 'Australia', value: 'AU', cities: ['Sydney', 'Melbourne', 'Brisbane'] },
      ];
      const [country, setCountry] = React.useState('')
      const [city, setCity] = React.useState('')
    return (
    <div>
      <select name="country" id="" onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((ele, index) => (
          <option key={index} value={ele.value} >
            {ele.name}
          </option>
        ))}
      </select>

      {
            city && (
                <h3>
                    {city}
                </h3>
            )
        }
        {country &&  <City cities={ countries.find(c => c.value === country)} setCity ={setCity}  />}
       
    </div>
  )
}
