import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const Form = () => {
  const [town, setTown] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [averageAmount, setAverageAmount] = useState('');
  const [hotel, setHotel] = useState('');
  const [adventure, setAdventure] = useState('');
  const [activityType, setActivityType] = useState('Indoor');
  const [features, setFeatures] = useState({
    brunch: false,
    dessert: false,
    lateNight: false,
    freeParking: false,
    petFriendly: false,
    fitnessCenter: false
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'towns'), {
        town,
        restaurant,
        averageAmount,
        hotel,
        adventure,
        activityType,
        features
      });
      alert('You have successfully saved this town!');
      // Reset the form fields
      setTown('');
      setRestaurant('');
      setAverageAmount('');
      setHotel('');
      setAdventure('');
      setActivityType('Indoor');
      setFeatures({
        brunch: false,
        dessert: false,
        lateNight: false,
        freeParking: false,
        petFriendly: false,
        fitnessCenter: false
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error saving the town. Please try again.');
    }
  };

  const handleFeatureChange = (e) => {
    const { name, checked } = e.target;
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: checked
    }));
  };

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
  
  
  return (
    <div>
      <h1>Add Adventure Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="town">Town Name:</label>
          <input
            type="text"
            id="town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="restaurant">Restaurant Name:</label>
          <input
            type="text"
            id="restaurant"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
            required
          /> */}
        </div>
        <div>
          <label htmlFor="averageAmount">Average Amount for Stay and Fooding:</label>
          <input
            type="number"
            id="averageAmount"
            value={averageAmount}
            onChange={(e) => setAverageAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hotel">Hotel Name:</label>
          <input
            type="text"
            id="hotel"
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adventure">Adventure Name:</label>
          <input
            type="text"
            id="adventure"
            value={adventure}
            onChange={(e) => setAdventure(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="activityType">Activity Type:</label>
          <select
            id="activityType"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            required
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <div>
          <h3>Restaurant Features:</h3>
          <label>
            <input
              type="checkbox"
              name="brunch"
              checked={features.brunch}
              onChange={handleFeatureChange}
            />
            Brunch
          </label>
          <label>
            <input
              type="checkbox"
              name="dessert"
              checked={features.dessert}
              onChange={handleFeatureChange}
            />
            Dessert
          </label>
          <label>
            <input
              type="checkbox"
              name="lateNight"
              checked={features.lateNight}
              onChange={handleFeatureChange}
            />
            Late Night
          </label>
        </div>
        <div>
          <h3>Hotel Features:</h3>
          <label>
            <input
              type="checkbox"
              name="freeParking"
              checked={features.freeParking}
              onChange={handleFeatureChange}
            />
            Free Parking
          </label>
          <label>
            <input
              type="checkbox"
              name="petFriendly"
              checked={features.petFriendly}
              onChange={handleFeatureChange}
            />
            Pet-friendly
          </label>
          <label>
            <input
              type="checkbox"
              name="fitnessCenter"
              checked={features.fitnessCenter}
              onChange={handleFeatureChange}
            />
            Fitness Center
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Form;
