import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './sass/app.sass';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
