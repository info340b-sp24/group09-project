import React, { useState } from 'react';
import imagePath from '../image/www.reallygreatsite.com.png';
import cardData from '../card-data.json';



import './home.css';
import { Link } from 'react-router-dom';

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

function CardList({ filters }) {
  const filteredData = cardData.filter(card => {
    if (filters.length === 0) {
      return true;
    }

    for (let i = 0; i < filters.length; i++) {
      if (card.attributes.includes(filters[i])) {
        return true;
      }
    }

    return false;
  });


  return (
    <div className="card-container">
      {filteredData.map((card, index) => (
        <PlaceCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          altTag={card.altTag}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckChange = (filter) => {
    setSelectedFilters(prevState => {
      if (prevState.includes(filter)) {
        return prevState.filter(item => item !== filter);
      } else {
        return [...prevState, filter];
      }
    });
  };
  return (
    <div>
      <br></br><br></br>
      <div className="showcaseCardss">
        <div className="card1">
          <div className="cardi">

            <img src={imagePath} alt="the content of planner" className="storyimage" />

          </div>
          <div className="cardh">
            <h2 className="h3">Welcome to Trip Planner</h2>
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
                <label for="Searchkeyword" className="form-label">Search</label>
                <input type="text" className="form-control" id="Searchkeyword" placeholder="destination" />
              </div>
              <button type="button" className="btn btn-lg btn-primary">Search</button>
              {/* <!-- filter1 --> */}
              <div>
                <p>Activity</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Indoor')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Indoor
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Outdoor')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Outdoor
                  </label>
                </div>
              </div>
              {/* <!-- filter2 --> */}
              <div>
                <p>Resturant</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Brunch')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Brunch
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Dessert')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Dessert
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Late Night')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Late Night
                  </label>
                </div>
              </div>
              {/* <!-- filter3 --> */}
              <div>
                <p>Hotel</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Free Parking')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Free parking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Pet-friendly')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Pet-friendly
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckChange('Fitness center')} />
                  <label className="form-check-label" for="flexCheckDefault">
                    Fitness center
                  </label>
                </div>
              </div>
            </section>

          </div>
        </div>
        <div className='sec2'>
          <CardList filters={selectedFilters} />
        </div>
      </div>
    </div>

  );

}
