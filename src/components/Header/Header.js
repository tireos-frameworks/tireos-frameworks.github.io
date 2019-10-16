import React from 'react';
import './Header.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixHeader: 'is-not-fixed',
    };

    this.handleOnScroll = this.handleOnScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleOnScroll);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  handleOnScroll(e) {
    if (window.pageYOffset > 0 && this.state.fixHeader === 'is-not-fixed') {
      this.setState({ fixHeader: '' })
    } else if (window.pageYOffset === 0 && this.state.fixHeader !== 'is-not-fixed') {
      this.setState({ fixHeader: 'is-not-fixed' })
    }
  }


  render() {
    return (
      <header className={this.state.fixHeader}>
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
