import geoIcon from '../../assets/img/geoIcon.png'
import './ResultItem.css'

function ResultItem ({ data, openInfo, showOnMap }) {
  const { img, title, address, price_from, coordinates, price_to } = data;
  return <div className='result-item'>
    <div className='result-item__image'>
      <img src={`http://feniksrp.beget.tech/${img}`} width='100%' height='100%' />
    </div>
    <div className='result-item__content'>
      <h2 className='result-item__title'>{title}</h2>
      <p className='result-item__sort'>Цена: от {price_from}р до {price_to}р</p>
      <button className='result-item__geo' onClick={() => showOnMap(coordinates)}>
        <div className='result-item__icon'>
          <img src={geoIcon} alt="иконка геолокации" width='100%' height='100%' />
        </div>
        {address}
      </button>
      <button className='result-item__more' onClick={()=>openInfo(data)}>Подробнее</button>
    </div>
  </div>
}

export default ResultItem;