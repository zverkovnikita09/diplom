import './SecondScreen.css';
import Map from '../Map/Map'
import Result from '../Result/Result';

const SecondScreen = () => {
  return <div className='second-screen'>
    <h1 className='second-screen__title'>Результаты поиска:</h1>
    <Map />
    <Result/>
  </div>
}

export default SecondScreen;