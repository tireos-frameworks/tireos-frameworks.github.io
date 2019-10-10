import React from 'react';
import './Header.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render() {
    return(
      <header>
        <div className="container">
          <div className="header">
            <div className="header__logo">
              <Link to={'/'}>
                <span className={'header__logo-any'}>ANY</span><span className={"header__logo-can"}>can</span>
                <span className={'header__logo-since'}>since 2007</span>
              </Link>
            </div>
            <div className="header__menu"><HeaderMenu/></div>
            <div className="header__button">
              <div className="btn btn--primary">Callback</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
