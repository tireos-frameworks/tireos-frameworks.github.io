import React from 'react';
import './AvailableAndPrePrder.scss';

import AvailableImage from './img/available.jpg';
import PreorderImage from './img/pre-order.jpg';

const AvailableAndPrePrder = () => {

  const data = [
    {
      image: AvailableImage,
      title: "Available products", items: [
        { id: 1, "name": "Section1", link: '' },
        { id: 2, "name": "Section2", link: '' },
        { id: 3, "name": "Section3", link: '' },
        { id: 4, "name": "Section4", link: '' },
      ]
    },
    {
      image: PreorderImage,
      title: "Pre order products", items: [
        { id: 5, "name": "Section1", link: '' },
        { id: 6, "name": "Section2", link: '' },
        { id: 7, "name": "Section3", link: '' },
        { id: 8, "name": "Section4", link: '' },
      ]
    },
  ];

  return (
    <div className="available-and-pre-order">
      {data.map(item => {
        return (
          <div className="available-and-pre-order__item" key={item.title} style={{backgroundImage: 'url("'+item.image+'")'}}>
            <div className="available-and-pre-order__name">{item.title}</div>
            <ul className="available-and-pre-order__sections">
              {item.items.map((value, index) => {
                return (<li key={index}><a href={value.link}>{value.name}</a></li>)
              })}
            </ul>
          </div>
        )
      })}

    </div>
  )
};

export default AvailableAndPrePrder;
