import './Result.css'
import ResultItem from '../ResultItem/ResultItem'
import CardPopup from '../CardPopup/CardPopup';
import { useState } from 'react';
import ResultItemPlaceholder from '../ResultItemPlaceholder/ResultItemPlaceholder';

const Result = ({ items, loading, error, showOnMap }) => {
  const [popupActive, setPopupActive] = useState(false);
  return <>
    <CardPopup active={popupActive} setActive={setPopupActive} />
    <div className='result'>
      <h1 className='result__title'>{loading ? 'Поиск...' : error ? <span className='result__error'>Произошла ошибка, попробуйте еще раз</span>
        : items?.length ? `Найдено точек, удовлетворяющих запросу: ${items.length}`
          : 'По вашему запросу ничего не найдено'}</h1>
      {loading ? <>
        <ResultItemPlaceholder />
        <ResultItemPlaceholder />
        <ResultItemPlaceholder />
      </> : items?.length ?
        items.map(item => <ResultItem
          key={item.id}
          data={item}
          setPopupActive={() => setPopupActive(true)}
          showOnMap={showOnMap}
        />)
        : null}
    </div>
  </>
}

export default Result;