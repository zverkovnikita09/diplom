import './SecondScreen.css';
import Map from '../Map/Map'
import Result from '../Result/Result';

const SecondScreen = () => {
  return <>
    <div className='second-screen'>
      <div className='second-screen__content'>
        <Result />
        <Map />
      </div>
    </div>
  </>
}

export default SecondScreen;