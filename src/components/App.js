import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import Footer from './footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
