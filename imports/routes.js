import React from 'react';
import { setUser } from '/imports/actions';

// React router
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

// Redux store and initial state
import { Provider } from 'react-redux'
import initialState from '/imports/initialState.json';
import storeFactory from '/imports/store';
const store = storeFactory(initialState);

// Layouts
import AppLayout from '/imports/ui/layouts/AppLayout';
import BlankLayout from '/imports/ui/layouts/BlankLayout';

// Page components
import LoadData from '/imports/ui/LoadData';
import Home from '/imports/ui/pages/Home';
import DockSales from '/imports/ui/pages/DockSales';
import Taxes from '/imports/ui/pages/Taxes';
import ShoppeCreation from '/imports/ui/pages/ShoppeCreation';
import ShoppeSales from '/imports/ui/pages/ShoppeSales';
import Labor from '/imports/ui/pages/Labor';

export const renderRoutes = () => (
   <Provider store={store}>
      <Router history={browserHistory}>
         <div>
            <LoadData />
            <Route exact path="/" component={Home}/>
            <AppLayout exact path="/dock" name="dock" component={DockSales}/>
            <AppLayout exact path="/taxes" component={Taxes}/>
            <AppLayout exact path="/shoppe" name="shoppe" component={ShoppeSales}/>
            <AppLayout exact path="/labor" name="labor" component={Labor}/>
            <BlankLayout exact path="/createShoppe" component={ShoppeCreation}/>
         </div>
      </Router>
   </Provider>
);
