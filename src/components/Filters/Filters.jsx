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
    districts: {
      'Коминтерновский': false,
      'Центральный': false,
      'Ленинский': false,
      'Советский': false,
      'Железнодорожный': false,
      'Левобережный': false
    }
  })

  /*  const updateDistricts = (item) => {
     const districtsUpdated = { ...districts, [item]: !districts[item] };
     setDistricts(districtsUpdated);
   } */

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const dataType = typeof formData[name];
    const newFormData = {};
    if(dataType === 'boolean'){
      newFormData = {...formData, [name]: e.target.checked}
    }
    if(dataType === 'object'){
      newFormData = {...formData, [name]: {...formData[name], [value]: e.target.checked}}
    }
    setFormData(newFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {};
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
  }

  return <div className='filters'>
    <img src={background} alt="Фон" className='filters__background' width='100%' height='100%' />
    <div className='filters__content'>
      <form className='filters__form' onSubmit={e => handleSubmit(e)}>
        {/* <div className='form-group'>
          <h2 className='filters__label'>Цена</h2>
          <h2 className='filters__label'>Ассортимент</h2>
          <h2 className='filters__label'>Качество обслуживания</h2>
          <CheckBox
            id='delivery'
            name='delivery'
            value='delivery'
            checked={delivery}
            setChecked={e => setDelivery(e.target.checked)}>
            Наличие доставки
          </CheckBox>
          <CheckBox
            id='eatPlace'
            name='eatPlace'
            value='eatPlace'
            checked={eatPlace}
            setChecked={e => setEatPlace(e.target.checked)}>
            Наличие места для приема пищи
          </CheckBox>
        </div>
        <div className='form-group'>
          <h2 className='form-title'>Районы</h2>
          <div className='filters__districts'>
            {Object.keys(districts).map((item, index) => {
              return <CheckBox id={item} name={districts } value={item} checked={districts[item]} setChecked={e => updateDistricts(e.target.value)}>{item}</CheckBox>
            })}
          </div>
        </div> */}
        <button>Искать</button>
      </form>
    </div>
  </div>
}

export default Filters;