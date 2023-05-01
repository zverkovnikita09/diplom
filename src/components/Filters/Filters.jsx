import './Filters.css'
import background from '../../assets/img/background_filters.png'

const Filters = () => {
  return <div className='filters'>
    <img src={background} alt="Фон" className='filters__background' width='100%' height='100%'/>
    <div className='filters__content'>
      <form className='filters__form'>
        <div className='form-group'>
          <label className='filters__label' htmlFor="">
            <input type='checkbox' />
            Наличие доставки
          </label>
          <label className='filters__label' htmlFor="">
            <input type='checkbox' />
            Наличие места для приёма пищи
          </label>
          <h2 className='form-title'>Районы</h2>
          <input type="checkbox" />
        </div>
        <div className='form-group'>
          <label className='filters__label' htmlFor="">
            Цена
            <input type="text" />
          </label>
          <label className='filters__label' htmlFor="">
            Ассортимент
            <input type="text" />
          </label>
          <label className='filters__label' htmlFor="">
            Качество обслуживания
            <input type="text" />
          </label>
        </div>
      </form>
    </div>
  </div>
}

export default Filters;