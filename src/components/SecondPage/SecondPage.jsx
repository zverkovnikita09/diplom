import './SecondPage.css';
import Map from '../Map/Map'
import Result from '../Result/Result';
import { useEffect, useRef, useState } from 'react';
import { Link, createSearchParams, useSearchParams } from 'react-router-dom';

function SecondPage({ districts }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mapCenter, setMapCenter] = useState([51.665944, 39.191717]);
  const [zoom, setZoom] = useState(10);
  const mapRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({
    delivery: Number(searchParams.get('delivery')) || 0,
    foodcort: Number(searchParams.get('foodcort')) || 0,
    price_from: searchParams.get('price_from') || 0,
    price_to: searchParams.get('price_to') || 0,
    district_id: searchParams.get('district') || 0
  })

  const centerToPoint = (geometry) => {
    window.innerWidth < 992 && mapRef.current.scrollIntoView();
    setMapCenter(geometry);
    setZoom(17);
  }

  useEffect(() => {
    if (districts && params.district_id) {
      const currentDistrict = districts?.find(el => el.id == params.district_id);
      setMapCenter([currentDistrict.latitude, currentDistrict.longitude])
      setZoom(13);
    }
    let validParams = {};
    for (const param in params) {
      if (params[param]) {
        validParams[param] = params[param];
      }
    }
    fetch(`http://feniksrp.beget.tech/api/filtration?${createSearchParams(validParams)}`)
      .then(res => res.json())
      .then(res => setResult(res))
      .catch(e => setError(true))
      .finally(() => setLoading(false))
  }, [districts])

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
          <Link className='second-screen__link-back' to='/?page=1'>Вернуться к фильтрам</Link>
        </div>
        <div ref={mapRef}>
          <Map center={mapCenter}
            items={result}
            zoom={zoom} />
        </div>
      </div>
    </div>
  </>
}

export default SecondPage;