import './SecondScreen.css';
import Map from '../Map/Map'

const SecondScreen = () => {
  return <div className='second-screen'>
    <h1 className='second-screen__title'>Результаты поиска:</h1>
    <Map />
  </div>
}

export default SecondScreen;