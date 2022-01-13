import { Routes, Route, Navigate } from 'react-router-dom';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import data from './assets/data.json';

function App() {
  return (<>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/destination' element={<DestinationPage destinations={data.destinations}/>} />
        <Route path='/crew' element={<CrewPage crew={data.crew} />} />
        <Route path='/technology' element={<TechnologyPage technology={data.technology} />} />
        <Route path='/*' element={<Navigate replace to='/home' />} />
      </Routes>

  </>
  );
}

export default App;
