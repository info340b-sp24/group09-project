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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Travel Tips",
      text: "Before your journey, remember to take a look at your destination, pack light, and keep your essentials handy. Stay aware of your surroundings, trust your instincts, and always have a backup plan. Embrace the adventure, try new things, and make memories that will last a lifetime!"
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="planner" element={<Planner />} />
        <Route path="todo" element={<Todo posts={posts} setPosts={setPosts} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post/:id" element={<Post posts={posts} />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="/details/:title" element={<Pike />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

