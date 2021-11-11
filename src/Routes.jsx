import {
  Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Product from './pages/Product';
import Header from './components/header';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" />
      <Route exact path="/register">
        <Register />
      </Route>
      <>
        <Header />
        <Route exact path="/" />
        <Route exact path="/product/:productId">
          <Product />
        </Route>
        <Route exact path="/checkout" />
      </>
    </Switch>

  );
}
