import React from 'react';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
