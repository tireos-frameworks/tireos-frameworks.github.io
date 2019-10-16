import React from 'react';
import { Parallax } from 'react-parallax';

import './MainDescription.scss';
import ParallaxImage from './img/order-price-bg.jpg';

class MainDescription extends React.Component {
  render() {
    return (
      <Parallax
        blur={1}
        bgImage={ParallaxImage}
        bgImageAlt="the cat"
        strength={200}
      >

        <div className="main-description">
          <div className="container">
            Блок, описание сервиса. Суть блока есть офер плана, Поставим из Азии дешевле с доставкой
            от 15 дней от тысяч проверенных фабрик с гарантией РФ.
          </div>
        </div>
        <div style={{ height: '400px' }}/>
      </Parallax>
    );
  }
}

export default MainDescription;
