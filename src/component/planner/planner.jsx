import React from 'react'
import './planner.css'

export default function Planner() {
  return (
    <div>
      <br></br><br></br>

      <div id="trip-planner" >
      <h2>Create Your Trip Plan</h2>
      <form id="trip-form" />
        <label for="travel-dates">Travel Dates:</label>
        <input className='inputs' type="date" id="travel-dates" required /> 
        <label for="activities">Preferred Activities:</label>
        <input className='inputs' type="text" id="activities" />
        <label for="budget-range">Budget Range:</label>
        <input className='inputs' type="text" id="budget-range" />
        <label for="destinations">Specific Destinations:</label>
        <input className='inputs' type="text" id="destinations" />
        <button type="submit">Generate Itinerary</button>

    </div>
    <section id="itinerary">
      <h2>Your Trip Itinerary</h2>
      <div id="itinerary-details" class="details-container">
        {/* <!-- Itinerary details will be displayed here --> */}
      </div>
    </section>
    <section id="budget-tracker">
      <h2>Budget Tracker</h2>
      <div id="budget-details" class="details-container">
        {/* <!-- Budget details will be displayed here --> */}
      </div>
    </section>
    </div>
  )
}
