import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home';
import Planner from './components/planner';
import Todo from './components/todo';
import About from './components/about'
import Contact from './components/contact'
import Post from './components/post'
import Itinerary from './components/home'
import Pike from './components/pike';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="planner" element={<Planner />} />
      <Route path="todo" element={<Todo />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="post/:id" element={<Post />} />
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
