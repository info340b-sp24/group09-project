import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/home';
import Planner from './component/planner/planner';
import Todo from './component/todo/todo';
import About from './component/about/about'
import Contact from './component/contact/contact'
import Post from './component/post/post'
import Itinerary from './component/itinerary/itinerary'
import Pike from './component/pike/pike';
import Footer from './component/footer/footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="planner" element={<Planner />} />
      <Route path="todo" element={<Todo />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="post" element={<Post />} />
      <Route path="itinerary" element={<Itinerary />} />
      <Route path="pike" element={<Pike />} />
      <Route path="footer" element={<Footer />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
