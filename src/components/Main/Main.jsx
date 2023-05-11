import './Main.css'
import backgroung from '../../assets/img/background_main.webp'
import arrowDown from '../../assets/img/arrow-down.png'

const Main = ({scrollPage}) => {
   return <div className='main'>
    <img src={backgroung} className='main__background' alt="Задний фон" width='100%' height='100%' />
    <div className='main__content'>
      <h1 className='main__title'>Не знаешь где купить шаурму в Воронеже?</h1>
      <p className='main__text'>Листай вниз!</p>
    </div>
    <button className={'main__button-down'} onClick={scrollPage}>
      <img src={arrowDown} className='arrow-down' alt="Стрелка вниз" width='100%' height='100%' />
    </button>
  </div>
}

export default Main;