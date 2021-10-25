import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Routes/Search';
import NotFound from './Routes/NotFound';
import ShoppingCart from './Routes/ShoppingCart';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  render() {
    api.getCategories()
      .then((categories) => {
        console.log(categories);
      });

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/shoppingCart" component={ ShoppingCart } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;