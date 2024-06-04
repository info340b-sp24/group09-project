import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './planner.css'; // Import the CSS file

const SearchTownData = () => {
  const [town, setTown] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  const [filter, setFilter] = useState({
    brunch: false,
    dessert: false,
    lateNight: false,
    freeParking: false,
    petFriendly: false,
    fitnessCenter: false,
  });

  const handleSearch = async () => {
    try {
      const q = query(collection(db, 'towns'), where('town', '==', town));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching town: ', error);
      alert('Error searching town. Please try again.');
    }
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const filterResults = () => {
    return searchResults.filter((townData) => {
      const { features = {}, averageAmount } = townData;
      return (
        (!filter.brunch || features.brunch) &&
        (!filter.dessert || features.dessert) &&
        (!filter.lateNight || features.lateNight) &&
        (!filter.freeParking || features.freeParking) &&
        (!filter.petFriendly || features.petFriendly) &&
        (!filter.fitnessCenter || features.fitnessCenter) &&
        (!priceRange || averageAmount <= priceRange)
      );
    });
  };

  return (
    <div className="container">
      <h2>Trip Planner</h2>
      <h4>Plan Your Trip</h4>
      <div>
        <label htmlFor="searchTown">Destination:</label>
        <input
          type="text"
          id="searchTown"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          placeholder="Enter your destination location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <div>
        <h3>Filter Results</h3>
        <div className="filter-section">
          <h4>Restaurant Features:</h4>
          <label>
            <input
              type="checkbox"
              name="brunch"
              checked={filter.brunch}
              onChange={handleFilterChange}
            />
            Brunch
          </label>
          <label>
            <input
              type="checkbox"
              name="dessert"
              checked={filter.dessert}
              onChange={handleFilterChange}
            />
            Dessert
          </label>
          <label>
            <input
              type="checkbox"
              name="lateNight"
              checked={filter.lateNight}
              onChange={handleFilterChange}
            />
            Late Night
          </label>
        </div>
        <div className="filter-section">
          <h4>Hotel Features:</h4>
          <label>
            <input
              type="checkbox"
              name="freeParking"
              checked={filter.freeParking}
              onChange={handleFilterChange}
            />
            Free Parking
          </label>
          <label>
            <input
              type="checkbox"
              name="petFriendly"
              checked={filter.petFriendly}
              onChange={handleFilterChange}
            />
            Pet-friendly
          </label>
          <label>
            <input
              type="checkbox"
              name="fitnessCenter"
              checked={filter.fitnessCenter}
              onChange={handleFilterChange}
            />
            Fitness Center
          </label>
        </div>
        <div className="filter-section">
          <label htmlFor="priceRange">Maximum Price Range:</label>
          <input
            placeholder='Enter Price Range'
            type="number"
            id="priceRange"
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
        </div>
      </div>

      <div className="search-results">
        {filterResults().map((townData, index) => (
          <div key={index} className="town-card">
            <h4>{townData.town}</h4>
            <p>Activity Type: {townData.activityType}</p>
            <p>Adventure: {townData.adventure}</p>
            <p>Average Amount: {townData.averageAmount}</p>
            <p>Hotel: {townData.hotel}</p>
            <p>Restaurant: {townData.restaurant}</p>
            <p>Features:</p>
            <ul>
              <li>Brunch: {townData.features?.brunch ? 'Yes' : 'No'}</li>
              <li>Dessert: {townData.features?.dessert ? 'Yes' : 'No'}</li>
              <li>Fitness Center: {townData.features?.fitnessCenter ? 'Yes' : 'No'}</li>
              <li>Free Parking: {townData.features?.freeParking ? 'Yes' : 'No'}</li>
              <li>Late Night: {townData.features?.lateNight ? 'Yes' : 'No'}</li>
              <li>Pet Friendly: {townData.features?.petFriendly ? 'Yes' : 'No'}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTownData;
