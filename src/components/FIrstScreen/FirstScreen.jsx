import './FirstScreen.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper";
import Main from '../Main/Main';
import { useState } from 'react';
import Filters from '../Filters/Filters';
import { useSearchParams } from 'react-router-dom';

const FirstScreen = ({districts}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [swiper, setSwiper] = useState();

  return <Swiper
    direction={"vertical"}
    initialSlide={Number(searchParams.get('page')) || 0}
    slidesPerView={1}
    mousewheel={true}
    onSwiper={setSwiper}
    modules={[Mousewheel]}
    followFinger={false}
    allowTouchMove={true}
    speed={1000}
    breakpoints={{
      767: {
        allowTouchMove: false
      }
    }}
    className="scrollable"
  >
    <SwiperSlide><Main scrollPage={() => swiper.slideTo(1)} /></SwiperSlide>
    <SwiperSlide><Filters districts={districts}/></SwiperSlide>
  </Swiper>
}

export default FirstScreen;