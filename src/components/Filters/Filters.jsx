import './Filters.css'
import background from '../../assets/img/background_filters.png'

const Filters = () => {
  return <div className='filters'>
    <img src={background} alt="Фон" className='filters__background' width='100%' height='100%' />
    <div className='filters__content'>
      <form className='filters__form'>
        <div className='form-group'>
          <h2 className='form-title'>Цена</h2>
          <h2 className='form-title'>Ассортимент</h2>
          <h2 className='form-title'>Качество обслуживания</h2>
          <label className='filters__label' htmlFor="">
            <input type='checkbox' className='hidden' />
            Наличие доставки
          </label>
          <label className='filters__label' htmlFor="">
            <input type='checkbox' className='hidden' />
            Наличие места для приёма пищи
          </label>
        </div>
        <div className='form-group'>
          <h2 className='form-title'>Районы</h2>
          <div className='filters__districts'>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Коминтерновский
            </label>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Центральный
            </label>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Ленинский
            </label>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Советский
            </label>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Железнодорожный
            </label>
            <label className='filters__label' htmlFor="">
              <input type='checkbox' className='hidden' />
              Левобережный
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default Filters;