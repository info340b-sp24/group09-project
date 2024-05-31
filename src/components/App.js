import Header from './header';
import Footer from './footer'
import { Outlet } from 'react-router-dom'

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
