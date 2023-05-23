import { useEffect, useState } from 'react';
import FirstPage from '../FIrstPage/FirstPage';
import SecondScreen from '../SecondPage/SecondPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLoader from '../MainLoader/MainLoader';

function App() {
  const [districts, setDistricts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://front.tgbotonline.online/api/district')
      .then(res => res.json())
      .then(res => setDistricts(res))
      .catch(e => setError(true))
      .finally(() => setLoading(false))
  }, [])
  if (loading) return <MainLoader />
  return (
    <Routes>
      <Route path='/' element={<FirstPage districts={districts} />} />
      <Route path='/search' element={<SecondScreen districts={districts} />} />
    </Routes>
  );
}

export default App;
