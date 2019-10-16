import React from 'react';
import './ProductGroups.scss';

import OptimalShippingBg from './img/optimal_shipping.jpeg';
import CostReductionBg from './img/cost_reduction.jpg';
import OfficesInDiffCountryBg from './img/offices_in_diff_countries.jpg';
import RelatedServicesBg from './img/related_secvices.png';

const ProductGroups = () => {

  let data = [
    {
      id: 1,
      title: 'Optimal shipping',
      image: OptimalShippingBg,
      descriptionHTML: '<p>We choose the best delivery method based on delivery time requirements</p><ul>' +
        '<li>Express delivery (up to 2 days</li>' +
        '<li>Delivery from a warehouse, Guangzhou (from 15 days)</li>' +
        '<li>Optimal delivery (from 25 days)</li>' +
        '<li>Delivery by sea (from 45 days)</li>' +
        '</ul>'
    },
    {
      id: 2,
      title: 'Cost reduction up to 37%',
      image: CostReductionBg,
      descriptionHTML: '<ul>' +
        '<li>Large volume of orders</li>' +
        '<li>Full cycle logistics department</li>' +
        '<li>Its own staff of specialists in Asia</li>' +
        '<li>We work in 7 countries<br>(China, Thailand, India, Japan, Korea, Taiwan, Vietnam)</li>' +
        '</ul>'
    },
    {
      id: 3,
      title: 'Availability of offices in different countries',
      image: OfficesInDiffCountryBg,
      descriptionHTML: '<ul>' +
        '<li>Own staff in Moscow and China, allows you to quickly respond to your needs</li>' +
        '<li>The fastest interaction between offices</li>' +
        '</ul>'
    },
    {
      id: 4,
      title: 'The whole range of related services in one place',
      image: RelatedServicesBg,
      descriptionHTML: '<ul>' +
        '<li>Development of a 3D model</li>' +
        '<li>Marking</li>' +
        '<li>Consolidation</li>' +
        '<li>Branding</li>' +
        '<li>Additional equipment</li>' +
        '<li>Distribution of consignments to addresses</li>' +
        '</ul>'
    },

  ];



  return (
    <div className={'product-groups'}>
      <h2 className="title">Our advantages</h2>
      <div className="product-groups__items">
        {data.map((item, key) => {

          const itemOddClass = key % 2 ? ' is-odd ' : '';

          return (<div className={'product-groups__item' + itemOddClass} key={key}>
            <div className="product-groups__image" style={{backgroundImage: 'url("'+item.image+'")'}}/>
            <div className="product-groups__title">{item.title}</div>
            <div className="product-groups__description" dangerouslySetInnerHTML={{__html: item.descriptionHTML}}/>
          </div>)
        })}
      </div>
    </div>
  );
}

export default ProductGroups;
