import Main from '../Main/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = ()=> {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
  );
}

export default App;
