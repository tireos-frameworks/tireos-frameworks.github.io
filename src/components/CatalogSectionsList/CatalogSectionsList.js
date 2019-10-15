import React from 'react';

import './CatalogSectionsList.scss';

import BusinessGifts from './img/business_gifts.jpg';
import Electronic from './img/electronic.jpg';
import SportAndOutdoor from './img/Sport_and_outdoor.jpg';
import HomeAndGarden from './img/Home_and_garden.jpg';
import ToysAndGames from './img/Toys_and_games.jpg';
import GoodsForBusiness from './img/Goods_for_business.jpg';
import LightAndLighting from './img/Light_and_lighting.jpg';
import HealthAndBeauty from './img/Health_and_beauty.jpg';

const sectionsList = [
  { name: 'Business gifts', 'id': 1, image: BusinessGifts },
  { name: 'Electronic', 'id': 2, image: Electronic },
  { name: 'Sport and outdoor', 'id': 3,image: SportAndOutdoor },
  { name: 'Home and garden', 'id': 4,image: HomeAndGarden},
  { name: 'Toys and games', 'id': 5,image: ToysAndGames },
  { name: 'Goods for business', 'id': 6,image: GoodsForBusiness },
  { name: 'Light and lighting', 'id': 7,image: LightAndLighting },
  { name: 'Health and beauty', 'id': 8,image: HealthAndBeauty },
];

class CatalogSectionsList extends React.Component {

  sectionItem(item) {
    return (
      <div className={"catalog-section-item"} key={item.id}>
        <div className="catalog-section-item__image" style={{ backgroundImage: 'url("' + item.image  + '")'}}/>
        <div className="catalog-section-item__name">{item.name}</div>
      </div>
    )
  }

  render() {
    return (
      <div className={'catalog-sections-list'}>
        <h2 className={"title"}>Группы товаров</h2>
        <div className="catalog-sections-list__items">
          {sectionsList.map(item => this.sectionItem(item))}
        </div>
      </div>
    );
  }
}

export default CatalogSectionsList;
