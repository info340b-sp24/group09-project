import React from 'react'
import imgp from '../image/Pike.jpg';

export default function Itinerary() {
  return (
    <div>
        <br></br><br></br><br></br>
        <div>
            <p>Day 1:</p>
            <p>Morning:</p>
            <p>Flight: SFO-SEA Flight Number: PA123</p>
            <p>Afternoon:</p>
            <p>Check in: Check into Astra Hotel, Seattle, A Tribute Portfolio Hotel by Marriott South Lake Union
            4.0 star property</p>
            <p>Lunch: Enjoy lunch at Andaluca Restaurant</p>
            <p>Exploration: Spend the afternoon exploring Pike Place Market, one of Seattle's most iconic attractions.
                Visit the
                various stalls, shops, and eateries, and don't miss the famous Pike Place Fish Market.
            </p>
            <img src={imgp} class="detail-image-size" alt='description of place'/>
            <p> Evening:</p>
            <p> Dinner: Have dinner at Six Seven Restaurant</p>
            <p> Day 2:
            </p>
            <p>Morning:</p>
            <p>Breakfast: Start your day with breakfast at a cozy cafe or bakery.</p>
            <p> Sightseeing: Visit the Space Needle, an iconic symbol of Seattle. Take the elevator to the observation
                deck for
                panoramic views of the city and Elliott Bay.
            </p>
            <p> Afternoon:</p>
            <p> Exploration: Explore the Seattle Center, home to several attractions including the Chihuly Garden and
                Glass
                exhibit,
                MoPOP (Museum of Pop Culture), and the Pacific Science Center.
            </p>
            <p>Lunch: Enjoy lunch at one of the restaurants in the Seattle Center area.
            </p>
            <p>Evening:
            </p>
            <p> Departure: Depending on your flight schedule, you may have some free time to do some last-minute
                souvenir
                shopping
                or relax before heading to the airport.
            </p>
            <p>Flight: SFO-SEA Flight Number: PA123</p>
        </div>
    </div>
  )
}
