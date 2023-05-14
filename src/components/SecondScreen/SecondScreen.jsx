import './SecondScreen.css';
import Map from '../Map/Map'
import Result from '../Result/Result';
import { useEffect, useState } from 'react';

const SecondScreen = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(()=>{
    fetch('http://diplom.online.swtest.ru/api/filtration?district_id=1')
    .then(res=>res.json())
    .then(res=>console.log(res))
  }, [])

  return <>
    <div className='second-screen'>
      <div className='second-screen__content'>
        <Result />
        <Map />
      </div>
    </div>
  </>
}

export default SecondScreen;