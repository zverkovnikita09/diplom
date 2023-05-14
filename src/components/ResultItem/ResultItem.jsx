import img from '../../assets/img/shawa.png'
import geoIcon from '../../assets/img/geoIcon.png'
import './ResultItem.css'

const ResultItem = ({setPopupActive}) => {
  return <div className='result-item'>
    <div className='result-item__image'>
      <img src={img} width='100%' height='100%' />
    </div>
    <div className='result-item__content'>
      <h2 className='result-item__title'>Шавушечная</h2>
      <p className='result-item__sort'>Цена: от 100р</p>
      <div className='result-item__geo'>
        <div className='result-item__icon'>
          <img src={geoIcon} alt="иконка геолокации" width='100%' height='100%' />
        </div>
        ул. Пушкина, 20
      </div>
      <button className='result-item__more' onClick={setPopupActive}>Подробнее</button>
    </div>
  </div>
}

export default ResultItem;