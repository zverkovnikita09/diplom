import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage/SingleArticlePage'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import SingleReviewPage from './pages/SingleReviewPage/SingleReviewPage';
import MapPage from './pages/MapPage/MapPage';

const App = ()=> {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>
        <Route path='/articles' element={<ArticlesPage/>}/>
        <Route path='/articles/:id' element={<SingleArticlePage/>}/>
        <Route path='/reviews' element={<ReviewsPage/>}/>
        <Route path='/reviews/:id' element={<SingleReviewPage/>}/>
        <Route path='/map' element={<MapPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
