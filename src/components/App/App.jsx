import { useEffect, useState } from 'react';
import FirstScreen from '../FIrstScreen/FirstScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [districts, setDistricts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('http://front.tgbotonline.online/api/district')
      .then(res => res.json())
      .then(res => setDistricts(res))
      .catch(e => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Routes>
      <Route path='/' element={<FirstScreen districts={districts}/>} />
      <Route path='/search' element={<SecondScreen districts={districts}/>} />
    </Routes>
  );
}

export default App;
