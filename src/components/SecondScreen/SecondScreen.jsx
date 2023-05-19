import './SecondScreen.css';
import Map from '../Map/Map'
import Result from '../Result/Result';
import { useEffect, useState } from 'react';
import { Link, createSearchParams, useSearchParams } from 'react-router-dom';

const SecondScreen = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mapCenter, setMapCenter] = useState([51.665944, 39.191717]);
  const [zoom, setZoom] = useState(10)

  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({
    delivery: Number(searchParams.get('delivery')) || 0,
    foodcort: Number(searchParams.get('foodcort')) || 0,
    price_from: searchParams.get('price_from') || 0,
    price_to: searchParams.get('price_to') || 0,
    district_id: searchParams.get('district') || 0,
    sortBy: searchParams.get('service_quality') || searchParams.get('assortment') || '',
  })

  const centerToPoint = (geometry) => {
    setMapCenter(geometry)
    setZoom(17)
  }

  useEffect(() => {
    let validParams = {};
    for (const param in params) {
      if (params[param]) {
        validParams[param] = params[param];
      }
    }
    fetch(`http://front.tgbotonline.online/api/filtration?${createSearchParams(validParams)}`)
      .then(res => res.json())
      .then(res => setResult(res))
      .catch(e => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return <>
    <div className='second-screen'>
      <div className='second-screen__content'>
        <div className='second-screen__result'>
          <Result items={result}
            loading={loading}
            sortBy={params.sortBy}
            error={error}
            showOnMap={centerToPoint}
          />
          <Link className='second-screen__link-back' to='/?page=2'>Вернуться к фильтрам</Link>
        </div>
        <Map center={mapCenter}
          items={result}
          zoom={zoom} />
      </div>
    </div>
  </>
}

export default SecondScreen;