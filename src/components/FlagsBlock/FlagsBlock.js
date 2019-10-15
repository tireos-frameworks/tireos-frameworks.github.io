import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import ChinaImage from "./img/Flag_of_the_People's_Republic_of_China.svg";
import ThailandFlag from "./img/Flag_of_Thailand.svg";
import IndiaFlag from "./img/Flag_of_India.svg";
import JapanFlag from "./img/Flag_of_Japan.svg";
import SouthKoreaFlag from "./img/Flag_of_South_Korea.svg";
import VietnamFlag from "./img/250px-Flag_of_Vietnam.svg.png";
import TaiwanFlag from "./img/Flag_of_the_Republic_of_China.svg";

import './FlagsBlock.scss';

const FlagsBlock = ()=>{

  const params = {
    spaceBetween: 15,
    slidesPerView: 7,
    loop: true,
    autoplay: true,
  };

  const [updateSwiper] = useState(null);
  // const [swiper, updateSwiper] = useState(null);

  // const goNext = () => {
  //   if (swiper !== null) {
  //     swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiper !== null) {
  //     swiper.slidePrev();
  //   }
  // };
  return (
    <div className={'flags-block'}>
      <Swiper getSwiper={updateSwiper} {...params}>
        <div><img src={ChinaImage} alt=""/></div>
        <div><img src={ThailandFlag} alt=""/></div>
        <div><img src={IndiaFlag} alt=""/></div>
        <div><img src={JapanFlag} alt=""/></div>
        <div><img src={SouthKoreaFlag} alt=""/></div>
        <div><img src={VietnamFlag} alt=""/></div>
        <div><img src={TaiwanFlag} alt=""/></div>
      </Swiper>
      {/*<button onClick={goPrev}>Prev</button>*/}
      {/*<button onClick={goNext}>Next</button>*/}
    </div>
  );
};

export default FlagsBlock;
