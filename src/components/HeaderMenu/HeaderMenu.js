import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const HeaderMenu = (prop) => {
  const themeClass = (prop.hasOwnProperty('theme')) ? prop.theme : 'header-menu';

  const menu = [
    { link: '/catalog', title: 'Products' },
    { link: '/service', title: 'Service' },
    { link: '/delivery', title: 'Delivery' },
    { link: '/about-us', title: 'About Us' },
    { link: '/contacts', title: 'Contacts' },
  ];
  return (
    <ul className={themeClass}>
      {menu.map((item, key) => <li key={key}><Link to={item.link}>{item.title}</Link></li>)}
    </ul>
  );
}

export default HeaderMenu;
