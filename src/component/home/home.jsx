import React from 'react';
import imagePath from '../image/www.reallygreatsite.com.png';
import image1 from '../image/image_1.jpg';
import image2 from '../image/trophy.jpeg';
import image3 from '../image/Pike.jpg';
import image4 from '../image/chihuly.jpg';
import image5 from '../image/hotel.jpg';
import image6 from '../image/city.jpg';



import './home.css';
import { Link } from 'react-router-dom';

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
        <div className='sec2'>
        <div className="card-container">
          {/* <!-- card1 --> style="width: 18rem;"*/}
          <div className="card" >
            <img src={image1} className="card-img-top" alt="Space Needle in Seattle"/>
            <div className="card-body">
              <p className="card-text">Space Needle</p>
              <p className="card-text">a beloved symbol of Seattle and a must-visit attraction for tourists and locals
                alike.</p>
                <Link to={"/pike"} className="btn btn-primary">Learn more</Link>
            </div>
          </div>
          {/* <!-- card2 --> style="width: 18rem;"*/}
          <div className="card" >
            <img src={image2} className="card-img-top" alt="colorful macarons"/>
            <div className="card-body">
              <p className="card-text">Trophy Cupcakes & Party</p>
              <p className="card-text">Great place for cupcake and dessert.</p>
              <Link to={"/pike"} className="btn btn-primary">Learn more</Link>
            </div>
          </div>
          {/* <!-- card3 --> style="width: 18rem;"*/}
          <div className="card" >
            <img src={image3} className="card-img-top" alt="Neon-decorated farmer market"/>
            <div className="card-body">
              <p className="card-text">Pike Place Market</p>
              <p className="card-text">Pike Place Market is Seattle's original and largest incubator of small</p>
              <Link to={"/pike"} className="btn btn-primary">Learn more</Link>
            </div>
          </div>
          {/* <!-- card4 --> style="width: 18rem;"*/}
          <div className="card" >
            <img src={image4} className="card-img-top" alt="colorful glass exhibition"/>
            <div className="card-body">
              <p className="card-text">Chihuly Garden and Glass</p>
              <p className="card-text">Chihuly Garden and Glass offers a mesmerizing journey </p>
              <Link to={"/pike"} className="btn btn-primary">Learn more</Link>

            </div>
          </div>
          {/* <!-- card5 --> style="width: 18rem;"*/}
          <div className="card" >
            <img src={image5} className="card-img-top" alt="clean hotel room"/>
            <div className="card-body">
              <p className="card-text">Astra Hotel, Seattle</p>
              <p className="card-text">A Tribute Portfolio Hotel by Marriott South Lake Union 4.0 star property</p>
              <Link to={"/pike"} className="btn btn-primary">Learn more</Link>
            </div>
          </div>
          {/* <!-- card6 --> */}
          <div className="card" >
            <img src={image6} className="card-img-top" alt="lots of tall building"/>
            <div className="card-body">
              <p className="card-text">Itinerary 1</p>
              <p className="card-text">Two day one night Trip</p>
              <Link  to={"/itinerary"} className="btn btn-primary">Learn more</Link>
            </div>
          </div>
        </div>

        </div>
      </div>

    
    </div>

  );
}
