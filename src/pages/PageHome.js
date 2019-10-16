import React from 'react';

import {Helmet} from 'react-helmet/es/Helmet';

import MainBanner from './../components/MainBanner/MainBanner';
import CatalogSectionsList from '../components/CatalogSectionsList/CatalogSectionsList';
import MainDescription from '../components/MainDescription/MainDescription';
import FlagsBlock from '../components/FlagsBlock/FlagsBlock';
import AvailableAndPrePrder from '../components/AvailableAndPrePrder/AvailableAndPrePrder';
import AlibabaQuiz from '../components/AlibabaQuiz/AlibabaQuiz';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import ProductGroups from '../components/ProductGroups/ProductGroups';

class PageHome extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Главная страница - anycan.com</title>
          <meta name="description" content="Главная страница" />
        </Helmet>
        <MainBanner/>
        <div className="container section section--padding-top">
          <CatalogSectionsList/>
        </div>

        <MainDescription/>

        <div className="container section section--padding-top">
          <FlagsBlock/>
        </div>

        <div className="container section">
          <AvailableAndPrePrder/>
        </div>

        <div className="section section--padding-top section--bg-grey">
          <div className="container ">
            <AlibabaQuiz/>
          </div>
        </div>

        <div className="container section section--padding-top">
          <PopularProducts/>
        </div>

        <div className="section section--padding-top section--bg-grey">
          <div className="container ">
            <ProductGroups/>
          </div>
        </div>

      </div>
    )
  }
}

export default PageHome;
