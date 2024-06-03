import React, { useState } from 'react';
import imagePath from '../image/www.reallygreatsite.com.png';
import cardData from '../data/card-data.json';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function PlaceCard(props) {
  const { image, title, description, altTag, link } = props;

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={altTag} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{description}</p>
        <Link to={link} className="btn btn-primary">Learn more</Link>
      </div>
    </div>
  );
}

function CardList({ filters, searchKeyword }) {
  const filteredData = cardData.filter(card => {
    const matchesFilters = filters.length === 0 || filters.some(filter => card.attributes.includes(filter));
    const matchesSearch = !searchKeyword || card.title.toLowerCase().includes(searchKeyword.toLowerCase()) || card.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  if (filteredData.length === 0) {
    return (
      <div className="card-container">
        <div className='sec2'>
          <div class="alert alert-secondary" role="alert">
            No results match your criteria. Please try adjusting your filters or search term.
          </div>
        </div>
      </div>
    );
  }
  const card = filteredData.map((card, index) => (
    <PlaceCard
      key={index}
      image={card.image}
      title={card.title}
      description={card.description}
      altTag={card.altTag}
      link={card.link}
    />
  ));

  return (
    <div className="card-container">
      {card}
    </div>
  );
}

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const defaultCheckboxStates = {
    Indoor: false,
    Outdoor: false,
    Brunch: false,
    Dessert: false,
    "Late Night": false,
    "Free Parking": false,
    "Pet-friendly": false,
    "Fitness center": false
  };

  const [checkboxStates, setCheckboxStates] = useState(defaultCheckboxStates);

  const handleCheckChange = (filter) => {
    setSelectedFilters(prev => {
      if (prev.includes(filter)) {
        return prev.filter(item => item !== filter);
      } else {
        return [...prev, filter];
      }
    });
    setCheckboxStates(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    setActiveSearchTerm(searchTerm);
  };




  const handleClearFilters = () => {
    setSelectedFilters([]);
    setActiveSearchTerm('');
    setSearchTerm('');
    setCheckboxStates({ ...defaultCheckboxStates });
  };

  return (
    <div >
      <br></br><br></br>
      <div className="showcaseCardss">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePath}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Discover Your Next Adventure</h3>
              <p>Begin your journey by exploring ideal destinations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePath}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Personalize Your Itinerary</h3>
              <p>Create a customized travel plan that fits your budget</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePath}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Connect and Share</h3>
              <p>Share your experience with friends and fellow travelers</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='container'>
        <div className="cardh">
          <h2 >Welcome to Trip Planner</h2>
          <p><b>Plan your next adventure with ease using Trip Planner.
            Whether it's a family vacation, an adventure trip, or a weekend getaway, we've got you covered.
            Simply fill in your travel details and let us take care of the rest!</b></p>
        </div>
        </div>
      </div>

      {/* new container start from here */}
      <div className='sec'>
        <button class="btn btn-primary btn-light d-block d-md-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Hide filter
        </button>
        <div className='sec1'>
          <div class="flex-container" id="collapseExample">

            <section className="filter">
              {/* <!-- searchbox --> */}
              <div className="mb-3">
                <label className="form-label">Search</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="destination"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleSearchSubmit}>Search</button>
              {/* <!-- filter1 --> */}
              <div className='category'>
                <p>Activity</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates.Indoor} onChange={() => handleCheckChange('Indoor')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Indoor
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates.Outdoor} onChange={() => handleCheckChange('Outdoor')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Outdoor
                  </label>
                </div>
              </div>
              {/* <!-- filter2 --> */}
              <div className='category'>
                <p>Resturant</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates.Brunch} onChange={() => handleCheckChange('Brunch')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Brunch
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates.Dessert} onChange={() => handleCheckChange('Dessert')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Dessert
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates['Late Night']} onChange={() => handleCheckChange('Late Night')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Late Night
                  </label>
                </div>
              </div>
              {/* <!-- filter3 --> */}
              <div className='category'>
                <p>Hotel</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates['Free Parking']} onChange={() => handleCheckChange('Free Parking')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Free parking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates['Pet-friendly']} onChange={() => handleCheckChange('Pet-friendly')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Pet-friendly
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkboxStates['Fitness center']} onChange={() => handleCheckChange('Fitness center')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Fitness center
                  </label>
                </div>

              </div>
              <div>
                <button type="button" className="btn btn-primary button-margin" onClick={handleClearFilters}>Clear All Filters</button>
              </div>
            </section>

          </div>
        </div>
        <div className='sec2'>
          <CardList filters={selectedFilters} searchKeyword={activeSearchTerm} />
        </div>

      </div>
    </div>

  );

} 