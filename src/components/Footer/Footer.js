import HeaderMenu from '../HeaderMenu/HeaderMenu';
import React from 'react';
import {Link} from 'react-router-dom';
import InstagramImage from './img/instagram-icon.png';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer___col">
              <Link to={"/"} className="footer__logo">
                <span className="footer__logo-part-1">ANY</span>
                <span className="footer__logo-part-2">CAN</span>
              </Link>

              <div className="footer__mail">
                <a href="mailto:hello@anycan.com">hello@anycan.com</a>
              </div>
            </div>
            <div className="footer__col">
              <HeaderMenu theme={"footer-menu"}/>
            </div>
            <div className="footer__col">
              <ul className="footer__socials">
                <li>
                  <a href="https://www.instagram.com/anycan.ru/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramImage} alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
