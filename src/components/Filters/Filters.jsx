import './Filters.css'
import background from '../../assets/img/background_filters.webp'
import { useState } from 'react'
import CheckBox from '../UI/CheckBox/CheckBox';
import { createSearchParams, useNavigate } from 'react-router-dom';
import RadioButton from '../UI/RadioButton/RadioButton';
import ReactSlider from 'react-slider';

function Filters ({ districts }) {
  const navigate = useNavigate();
  const [price, setPrice] = useState({
    price_from: 100,
    price_to: 400
  })
  const [priceDisabled, setPriceDisabled] = useState(false)
  const [formData, setFormData] = useState({
    delivery: false,
    foodcort: false,
    price_from: 100,
    price_to: 400,
    district: 0
  })

  const handleDistrictChange = (e) => {
    setFormData({ ...formData, district: Number(e.target.value) })
  }

  const priceRound = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value > 400) {
      setFormData({ ...formData, [name]: 400 });
      setPrice({ ...price, [name]: 400 });
      return
    }
    if (value < 100) {
      setFormData({ ...formData, [name]: 100 });
      setPrice({ ...price, [name]: 100 });
      return
    }
    setPrice({ ...price, [name]: Math.round(value / 10) * 10 })
    setFormData({ ...formData, [name]: Math.round(value / 10) * 10 })
  }

  const toDisablePrice = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFormData({ ...formData, price_from: 0, price_to: 0 })
    }
    else {
      setFormData({ ...formData, price_from: price.price_from, price_to: price.price_to })
    }
    setPriceDisabled(checked)
  }

  const handleSliderChange = (value) => {
    const [price_from, price_to] = value;
    setPrice({ price_from, price_to })
    setFormData({ ...formData, price_from, price_to })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {};
    for (const param in formData) {
      if (formData[param]) {
        if (typeof formData[param] === 'boolean') {
          params[param] = Number(formData[param]);
          continue
        }
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
        <div className='filters__block'>
          <h2 className='filters__title'>ЦЕНА</h2>
          <div className='filters__price-block'>
            <div className='filters__form-group'>
              <label className={`filters__price-label${priceDisabled ? ' disabled' : ''}`}>
                от
                <input type='text'
                  name='price_from'
                  value={price.price_from}
                  className='filters__price-input'
                  onBlur={priceRound}
                  disabled={priceDisabled}
                  onChange={e => setPrice({ ...price, [e.target.name]: e.target.value })} />
              </label>
              <label className={`filters__price-label${priceDisabled ? ' disabled' : ''}`}>
                до
                <input type='text'
                  name='price_to'
                  value={price.price_to}
                  className='filters__price-input'
                  onBlur={priceRound}
                  disabled={priceDisabled}
                  onChange={e => setPrice({ ...price, [e.target.name]: e.target.value })} />
              </label>
            </div>
            <ReactSlider
              className="filters__slider"
              thumbClassName={`filters__slider-thumb`}
              trackClassName="filters__slider-track"
              defaultValue={[formData.price_from, formData.price_to]}
              value={[formData.price_from, formData.price_to]}
              min={100}
              max={400}
              onChange={handleSliderChange}
              minDistance={0}
              step={10}
              disabled={priceDisabled}
            />
            <CheckBox checked={priceDisabled}
              id='priceCheck'
              setChecked={toDisablePrice}>
              Не имеет значения
            </CheckBox>
          </div>
        </div>
        <div className='filters__block'>
          <h2 className='filters__title'>РАЙОН</h2>
          <div className='filters__districts-block'>
            <div className='filters__radio-group'>
              {districts?.length ? districts.map((district, index) => {
                return <RadioButton
                  key={district.id}
                  id={`district${index}`}
                  name='district'
                  value={district.id}
                  checked={formData.district === district.id}
                  setChecked={handleDistrictChange}>
                  {district.title}
                </RadioButton>
              }) : null}
            </div>
            <RadioButton
              id='district_none'
              name='district'
              value={0}
              checked={formData.district === 0}
              setChecked={handleDistrictChange}>
              Не выбрано
            </RadioButton>
          </div>
        </div>
        <div className='filters__block'>
          <h2 className='filters__title'>ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ</h2>
          <div className='filters__other-params'>
            <CheckBox
              id='delivery'
              name='delivery'
              value='delivery'
              checked={formData.delivery}
              setChecked={e => setFormData({ ...formData, delivery: e.target.checked })}>
              Наличие доставки
            </CheckBox>
            <CheckBox
              id='foodcort'
              name='foodcort'
              value='foodcort'
              checked={formData.foodcort}
              setChecked={e => setFormData({ ...formData, foodcort: e.target.checked })}>
              Наличие места для приема пищи
            </CheckBox>
          </div>
        </div>
        <button className='filters__submit'>НАЙТИ</button>
      </form>
    </div>
  </div>
}

export default Filters;