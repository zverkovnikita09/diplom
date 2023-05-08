import Portal from '../Portal/Portal';
import './CardPopup.css'
import img from '../../assets/img/placeholder.webp'

const CardPopup = ({ active, setActive }) => {
  return <Portal>
    <div className={`card-popup ${active ? 'active' : ''}`} onClick={() => setActive(false)} tabIndex={0}>
      <div className='card-popup__content' onClick={e => e.stopPropagation()}>
        <div className='card-popup__image'>
          <img src={img} />
        </div>
      </div>
    </div>
  </Portal>
}

export default CardPopup;