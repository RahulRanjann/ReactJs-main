import React from 'react'

export default function City({cities, setCity}) {

  return (
    <div>
        <select name="city" id="" onChange={(e)=> setCity(e.target.value)}>
        <option value="">Select City</option>
        {
           cities.cities.map(city =>(
                <option value={city}>{city}</option>
            ))
        }
      </select>
    </div>
  )
}
