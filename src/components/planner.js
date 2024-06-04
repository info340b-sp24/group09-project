import React, { useState } from 'react';
import data from '../data/card-data.json';

export default function Planner() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const uniqueAttributes = [...new Set(
    data.reduce(
      (acc, item) => {
        
        item.attributes.forEach(attr => {
      
        if (!acc.includes(attr)) {
          acc.push(attr);
        }
      });
      return acc;
    }, 
    [])
  )];

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedItems = data.filter(item => selectedDestinations.includes(item.title));
    const cost = selectedItems.reduce((sum, item) => {

      const itemCost = item.minimumCost.replace(/[^0-9]/g, '');
      
      return sum + (parseInt(itemCost, 10) || 0);
    }, 0);
    setTotalCost(cost);
    setShowResults(true);
  };

  const filteredDestinations = data.filter(item =>
    item.attributes.some(attr => selectedActivities.includes(attr))
  );

  return (
    <div className='container'>
      <br></br><br></br>
      <div id="trip-planner">
        <h2 className='web_title'>Create Your Trip Plan</h2>
        <form id="trip-form" onSubmit={handleSubmit}>
          <label htmlFor="travel-dates">Travel Dates:</label>
          <input
            className='inputs'
            type="date"
            id="travel-dates"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            required
          />
          <br></br>
          <label htmlFor="activities">Preferred Activities:</label>
          <div>
            {uniqueAttributes.map(attribute => (
              <div key={attribute}>
                <input
                  type="checkbox"
                  value={attribute}
                  checked={selectedActivities.includes(attribute)}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (selectedActivities.includes(value)) {
                      setSelectedActivities(prev => prev.filter(item => item !== value));
                    } else {
                      setSelectedActivities(prev => [...prev, value]);
                    }
                  }}
                />
                <label>{attribute}</label>
              </div>
            ))}
          </div>
          <br></br>
          <label htmlFor="destinations">Specific Destinations:</label>
          <div>
            {filteredDestinations.map(destination => (
              <div key={destination.title}>
                <input
                  type="checkbox"
                  value={destination.title}
                  checked={selectedDestinations.includes(destination.title)}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (selectedDestinations.includes(value)) {
                      setSelectedDestinations(prev => prev.filter(item => item !== value));
                    } else {
                      setSelectedDestinations(prev => [...prev, value]);
                    }
                  }}
                />
                <label>{destination.title}</label>
              </div>
            ))}
          </div>
          <br></br>
          <button type="submit">Generate Itinerary</button>
        </form>
      </div>
      {showResults && (
        <>
          <section id="itinerary">
          <br></br><br></br>
            <h2>Your Trip Itinerary</h2>
            <div id="itinerary-details" className="details-container">
              <p>Travel Date: {selectedDate}</p >
              <p>Preferred Activities: {selectedActivities.join(', ')}</p >
              <p>Specific Destinations: {selectedDestinations.join(', ')}</p >
            </div>
          </section>
          <section id="budget-tracker">
            <br />
            <h2>Budget Tracker</h2>
            
            <div id="budget-details" className="details-container">
              <p>Total Minimum Cost: ${totalCost}</p >
            </div>
          </section>
        </>
      )}
    </div>
  );
}