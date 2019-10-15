import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageHome from './pages/PageHome';
import PageCatalogSections from './pages/PageCatalogSections';
import PageDelivery from './pages/PageDelivery';
import PageAboutUs from './pages/PageAboutUs';
import PageContacts from './pages/PageContacts';
import Page404 from './pages/Page404';
import PageService from './pages/PageService';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path={"/"}><PageHome/></Route>
            <Route exact path={"/catalog"}><PageCatalogSections/></Route>
            <Route exact path={"/service"}><PageService/></Route>
            <Route exact path={"/delivery"}><PageDelivery/></Route>
            <Route exact path={"/about-us"}><PageAboutUs/></Route>
            <Route exact path={"/contacts"}><PageContacts/></Route>
            <Route><Page404/></Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
