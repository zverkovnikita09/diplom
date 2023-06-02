import { Rating } from '@mui/material';
import Portal from '../Portal/Portal';
import './CardPopup.css'
import { HiCheck } from 'react-icons/hi'
import { HiXMark } from 'react-icons/hi2'

function CardPopup({ active, setActive, data }) {
  return <Portal>
    <div className={`card-popup ${active ? 'active' : ''}`} onClick={() => setActive(false)} tabIndex={0}>
      <div className='card-popup__content' onClick={e => e.stopPropagation()}>
        <button className='card-popup__close-button' onClick={() => setActive(false)}>
          <HiXMark />
        </button>
        <div className='card-popup__left-block'>
          <div className='card-popup__image'>
            <img src={`http://feniksrp.beget.tech/${data?.img}`} width='100%' height='100%' alt='Изображение' />
          </div>
        </div>
        <div className='card-popup__right-block'>
          <div className='card-popup__rating-block'>
            <p className='card-popup__title'>{data?.title}</p>
            <Rating name="half-rating-read" value={data?.overall_rating ? Number(data?.overall_rating) : 0} precision={0.5} readOnly size="large" />
          </div>
          <div className='card-popup__rating-block'>
            Качество обслуживания
            <Rating name="half-rating-read" value={data?.service_quality ?? 0} precision={1} readOnly size='small' />
          </div>
          <div className='card-popup__rating-block'>
            Ассортимент
            <Rating name="half-rating-read" value={data?.assortment ?? 0} precision={1} readOnly size='small' />
          </div>
          <div className='card-popup__rating-block'>
            Доставка
            {data?.delivery ? <HiCheck color='green' size={25} /> : <HiXMark color='red' size={25} />}
          </div>
          <div className='card-popup__rating-block'>
            Место для приема пищи
            {data?.foodcort ? <HiCheck color='green' size={25} /> : <HiXMark color='red' size={25} />}
          </div>
          <div className='card-popup__description' dangerouslySetInnerHTML={{ __html: data?.descr }} />
        </div>
      </div>
    </div>
  </Portal>
}

export default CardPopup;