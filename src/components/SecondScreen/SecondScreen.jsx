import './SecondScreen.css';
import Map from '../Map/Map'
import Result from '../Result/Result';
import CardPopup from '../CardPopup/CardPopup';
import { useState } from 'react';

const SecondScreen = () => {
  const [popupActive, setPopupActive] = useState(false)
  return <>
    <CardPopup active={popupActive} setActive={setPopupActive} />
    <div className='second-screen'>
      <h1 className='second-screen__title'>Результаты поиска:</h1>
      <div className='second-screen__content'>
        <Result />
        <Map />
      </div>
    </div>
  </>
}

export default SecondScreen;