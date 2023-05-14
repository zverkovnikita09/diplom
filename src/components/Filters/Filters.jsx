import './Filters.css'
import background from '../../assets/img/background_filters.png'
import { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Filters = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    delivery: false,
    eatPlace: false,
    priceFrom: 0,
    priceTo: 0,
    district: '',
    sortBy: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {};
    for(const param in formData){
      if(formData[param]){
        params[param] = formData[param];
      } 
    }
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
  }

  return <div className='filters'>
    <img src={background} alt="Фон" className='filters__background' width='100%' height='100%' />
    <div className='filters__content'>
      <form className='filters__form' onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <h2 className='filters__label'>Цена</h2>
          <h2 className='filters__label'>Ассортимент</h2>
          <h2 className='filters__label'>Качество обслуживания</h2>
          <CheckBox
            id='delivery'
            name='delivery'
            value='delivery'
            checked={formData.delivery}
            setChecked={e => setFormData({...formData, delivery: e.target.checked})}>
            Наличие доставки
          </CheckBox>
          <CheckBox
            id='eatPlace'
            name='eatPlace'
            value='eatPlace'
            checked={formData.eatPlace}
            setChecked={e => setFormData({...formData, eatPlace: e.target.checked})}>
            Наличие места для приема пищи
          </CheckBox>
        </div>
        <button className='filters__submit'>НАЙТИ</button>
      </form>
    </div>
  </div>
}

export default Filters;