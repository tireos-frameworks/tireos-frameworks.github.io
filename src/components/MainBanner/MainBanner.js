import React from 'react';

import './MainBanner.scss';

const MainBanner = () => {

  return (
    <div className={'main-banner'}>
      <h1>Увеличьте доход ващего бизнеса, поставляя товары из стран Азии</h1>

      <div className="main-banner__text">По Вашему заказу найдем, закупим или произведем товары в
        странах Азии и доставим обратно в любой город России!
      </div>

      <ul className="main-banner__advantages">
        <li>Офис в Москве, Гуанджоу и штат специалистов в промышленных центрах Азии</li>
        <li>Собственный отдел логистики и складские помещения в ключевых транспортных узлах</li>
        <li>Гарантия качества товаров, регламентированный порядок работ и юридическая чистота
          сделки
        </li>
      </ul>

      <div className="main-banner__button">
        <div className="btn btn--primary">Рассчитать сроки и стоимость</div>
      </div>
    </div>
  );

}

export default MainBanner;
