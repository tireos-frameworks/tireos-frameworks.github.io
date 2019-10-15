import React from 'react';
import './ProductGroups.scss';

const ProductGroups = () => {

  let data = [
    {
      id: 1,
      title: 'Оптимальный способ доставки',
      descriptionHTML: '<p>Выбираем лучший способ доставки, исходя из требований к срокам поставки</p><ul>' +
        '<li>Экспресс доставка (до 2-х дней)</li>' +
        '<li>Доставка со склада, Гуанчжоу (от 15 дней)</li>' +
        '<li>Оптимальная доставка (от 25 дней)</li>' +
        '<li>Доставка морем (от 45 дней)</li>' +
        '</ul>'
    }
  ];

  for (let i = 1; i < 4; i++) {
    const newRow = { ...data[0] };
    newRow.id = newRow.id + i;
    data.push(newRow);
  }

  return (
    <div className={'product-groups'}>
      <h2 className="title">Product groups</h2>
      <div className="product-groups__items">
        {data.map((item, key) => {

          const itemOddClass = key % 2 ? ' is-odd ' : '';

          return (<div className={'product-groups__item' + itemOddClass} key={key}>
            <div className="product-groups__image"/>
            <div className="product-groups__title">{item.title}</div>
            <div className="product-groups__description" dangerouslySetInnerHTML={{__html: item.descriptionHTML}}/>
          </div>)
        })}
      </div>
    </div>
  );
}

export default ProductGroups;
