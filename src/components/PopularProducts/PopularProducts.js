import React from 'react';

import './PopularProducts.scss';
import ProductImage from './img/product.png';

class PopularProducts extends React.Component {
  constructor(props) {
    super(props);

    this.stickers = [
      { code: 'new', title: 'New 2019' },
      { code: 'best', title: 'Best sellers' },
      { code: 'exclusive', title: 'Exclusive' },
    ]
    this.data = [
      {
        id: 1,
        name: 'Product name',
        stickers: { 'new': "Y", 'best': "Y", 'exclusive': 'Y' },
        image: ProductImage,
        link: '/',
      }
    ];

    for (let i = 1; i <= 7; i++) {
      const newRow = { ...this.data[0] };
      newRow.id = newRow.id + i;
      this.data.push(newRow);
    }
  }


  item(product) {
    return (
      <div className="popular-products__item" key={product.id}>
        <a href={product.link} className="popular-products__image">
          <img src={product.image} alt=""/>
          <ul className="popular-products__stickers">
            {this.stickers.map(sticker => {
              if (product.stickers[sticker.code] !== undefined) {
                return (
                  <li key={sticker.code} className={sticker.code}>{sticker.title}</li>
                )
              }
              return ''
            })}
          </ul>
        </a>

        <a href={product.link} className={'popular-products__name'}>{product.name}</a>

        <div className="popular-products__button">
          <div className="btn btn--primary">Get product</div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className={'popular-products'}>
        <h2 className={'title'}>Popular products</h2>

        <div className="popular-products__items">
          {this.data.map(item => this.item(item))}
        </div>

      </div>
    );
  }
}

export default PopularProducts
