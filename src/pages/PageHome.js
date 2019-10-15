import React from 'react';
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
        <MainBanner/>
        <div className="container section section--padding-top">
          <CatalogSectionsList/>
        </div>
        <div className="section section--padding-top section--bg-grey">
          <div className="container ">
            <MainDescription/>
          </div>
        </div>
        <div className="container section section--padding-top">
          <FlagsBlock/>
        </div>

        <div className="container section">
          <AvailableAndPrePrder/>
        </div>

        <div className="container section">
          <AlibabaQuiz/>
        </div>

        <div className="container section">
          <PopularProducts />
        </div>

        <div className="container section">
          <ProductGroups/>
        </div>

      </div>
    )
  }
}

export default PageHome;
