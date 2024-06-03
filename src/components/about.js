import React from 'react';

export default function About() {
  return (
    <div className='container'> 
    <br></br><br></br>
      <main>
    <h2 class="web_title">About Trip Planner</h2>
    <section id="about">
    <br></br><br></br>
      <h2>Our Mission</h2>
      <p>Trip Planner aims to simplify the process of planning your next adventure. Our mission is to provide travelers
        with a user-friendly platform where they can effortlessly create personalized travel itineraries, manage their
        budgets, and discover new destinations.</p>
    </section>
    <section id="features">
    <br></br>
      <h2>Key Features</h2>
      <ul>
        <li className='lists'>Customized trip planning tool</li>
        <li className='lists'>Real-time cost estimation and budget tracking</li>
        <li className='lists'>Community-driven recommendations</li>
      </ul>
    </section>
    <section id="history">
    <br></br>
      <h2>Our Story</h2>
      <p>Founded in 2024, Trip Planner was born out of a passion for travel and a desire to simplify the trip planning
        process. Our team of developers and travel enthusiasts came together to create a platform that addresses the
        challenges faced by modern travelers.</p>
    </section>
  </main>
    </div>
  );
}
