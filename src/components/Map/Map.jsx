import { useEffect, useRef, useState } from 'react';
import './Map.css'
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";
import Placeholder from '../Placeholder/Placeholder';

function SearchMap ({ center, items, zoom }) {
  const [loading, setLoading] = useState(true);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) {
      map.current.setZoom(zoom);
      map.current.panTo(center);
    }
  }, [center, zoom])

  return <div className='map__container'>
    {loading ? <Placeholder /> : null}
    <YMaps>
      <Map defaultState={{ center: center, zoom: zoom }} width='100%' height='100%'
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint', 'clusterer.addon.balloon']}
        instanceRef={map}
        onLoad={() => setLoading(false)}
      >
        <Clusterer
          options={{
            groupByCoordinates: false,
          }}>
          {items.length ? items.map((item, index) => {
            return <Placemark key={index} geometry={[item.coordinates.x, item.coordinates.y]}
              options={{
                preset: 'islands#dotIcon',
              }}
              properties={
                {
                  hintContent: item.title,
                }} />
          }) : null}
        </Clusterer>
      </Map>
    </YMaps>
  </div>
}

export default SearchMap;