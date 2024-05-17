import React from 'react';
import imagePath from '../image/www.reallygreatsite.com.png';
// import image1 from '../image/image_1.jpg';
// import image2 from '../image/trophy.jpeg';
// import image3 from '../image/Pike.jpg';
// import image4 from '../image/chihuly.jpg';
// import image5 from '../image/hotel.jpg';
// import image6 from '../image/city.jpg';
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

function CardList(props) {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <PlaceCard
          key={index}
          image={card.image}
          jobName={card.title}
          description={card.description}
          altTag={card.altTag}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <br></br><br></br>
      <div className="showcaseCardss">
        <div className="card1">
          <div className="cardi">

            <img src={imagePath} alt="the content of planner" className="storyimage"/>
 
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
        <div className='sec1'>
          <button class="btn btn-primary btn-light d-block d-md-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Hide filter
          </button>
          <div class="flex-container" id="collapseExample">
            <section className="filter">
              {/* <!-- searchbox --> */}
              <div className="mb-3">
                <label for="Searchkeyword" className="form-label">Search</label>
                <input type="text" className="form-control" id="Searchkeyword" placeholder="destination" />
              </div>
              {/* <!-- filter1 --> */}
              <div>
                <p>Activity</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Indoor
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Outdoor
                  </label>
                </div>
              </div>
              {/* <!-- filter2 --> */}
              <div>
                <p>Resturant</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Brunch
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Dessert
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Late Night
                  </label>
                </div>
              </div>
              {/* <!-- filter3 --> */}
              <div>
                <p>Hotel</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Free parking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Pet-friendly
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Fitness center
                  </label>
                </div>
              </div>
              {/* <!-- range --> */}
              <div>
                <label for="budgetRange" className="form-label">Budget range</label>
                <input type="range" className="form-range" id="budgetRange" />
              </div>
              <button type="button" className="btn btn-lg btn-primary">Apply</button>
            </section>

          </div>
        </div>
        <div className='sec2'>
          <CardList />
        </div>
      </div>
    </div>

  );

}
