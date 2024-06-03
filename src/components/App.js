import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Planner from './planner';
import Todo from './todo';
import About from './about';
import Contact from './contact';
import Post from './post';
import Itinerary from './itinerary';
import Pike from './detail';
import 'bootstrap/dist/css/bootstrap.css';

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="planner" element={<Planner />} />
        <Route path="todo" element={<Todo />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post/:id" element={<Post/>} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="/details/:title" element={<Pike />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

