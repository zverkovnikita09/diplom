import './Result.css'
import ResultItem from '../ResultItem/ResultItem'
import CardPopup from '../CardPopup/CardPopup';
import { useState } from 'react';
import ResultItemPlaceholder from '../ResultItemPlaceholder/ResultItemPlaceholder';

const Result = () => {
  const [popupActive, setPopupActive] = useState(false);
  return <>
    <CardPopup active={popupActive} setActive={setPopupActive} />
    <div className='result'>
      <h1 className='result__title'>Результаты поиска:</h1>
      <ResultItem setPopupActive={() => setPopupActive(true)} />
      <ResultItemPlaceholder/>
    </div>
  </>
}

export default Result;