import { useRef, useState } from 'react';
import './Map.css'
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";

const SearchMap = () => {
  const [center, setCenter] = useState([51.665944, 39.191717]);
  const [zoom, setZoom] = useState(10)
  const map = useRef (null)
  const placeMarkCollection = [];

  return <div className='map'>
    <div className='map__container'>
      <YMaps>
        <Map defaultState={{ center: center, zoom: zoom }} width='100%' height='100%'
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint', 'clusterer.addon.balloon']}
          instanceRef={map}
        >
        </Map>
      </YMaps>
    </div>
  </div>
}

export default SearchMap;