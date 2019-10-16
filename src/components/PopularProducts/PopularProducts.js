import React from 'react';

import './PopularProducts.scss';
import Image0 from './img/out-0.jpg';
import Image1 from './img/out-1.jpg';
import Image2 from './img/out-2.jpg';
import Image3 from './img/out-3.jpg';
import Image4 from './img/out-4.jpg';
import DrawProduct from './DrawProduct';

class PopularProducts extends React.Component {
  constructor(props) {
    super(props);

    this.stickers = [
      { code: 'new', title: 'New 2019' },
      { code: 'best', title: 'Best sellers' },
      { code: 'exclusive', title: 'Exclusive' },
    ];

    this.data = [
      {
        id: 1,
        name: 'Product name',
        stickers: { 'new': "Y", 'best': "Y", 'exclusive': 'Y' },
        images: [Image0, Image1, Image2, Image3, Image4],
        link: '/',
        props: [
          { code: 'quantity', name: 'Quantity', value: 900 },
          { code: 'group', name: 'Group', value: 'Lighting' },
          { code: 'price', name: 'Price', value: 1500000 },
          { code: 'town', name: 'Town', value: 'Sochi' },
          { code: 'target', name: 'Target', value: 'Corporative gift' },
        ],
      }
    ];

    for (let i = 1; i <= 7; i++) {
      const newRow = { ...this.data[0] };
      newRow.id = newRow.id + i;
      this.data.push(newRow);
    }
  }

  render() {

    console.log(this.data);

    return (
      <div className={'popular-products'}>
        <h2 className={'title'}>Popular products</h2>

        <div className="popular-products__items">
          {this.data.map((item) => <DrawProduct product={item} stickers={this.stickers} key={item.id}/>)}
        </div>

      </div>
    );
  }
}

export default PopularProducts
