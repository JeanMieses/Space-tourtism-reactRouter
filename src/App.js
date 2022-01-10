import { Routes, Route, Navigate } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';
import data from './assets/data.json';

function App() {
  return (<>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination destinations={data.destinations}/>} />
        <Route path='/crew' element={<Crew crew={data.crew} />} />
        <Route path='/technology' element={<Technology technology={data.technology} />} />
        <Route path='/*' element={<Navigate replace to='/home' />} />
      </Routes>

  </>
  );
}

export default App;
