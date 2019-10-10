import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


class HeaderMenu extends React.Component {
  render() {
    const menu = [
      {link: '/catalog', title: 'Catalog'},
      {link: '/delivery', title: 'Delivery'},
      {link: '/about-us', title: 'About Us'},
      {link: '/contacts', title: 'Contacts'},
    ];
    return (
      <ul className={'header-menu'}>
        {menu.map((item,key) => <li key={key}><Link to={item.link}>{item.title}</Link></li>)}
      </ul>
    );
  }
}

export default HeaderMenu;
