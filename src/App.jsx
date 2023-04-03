import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const App = ()=> {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
