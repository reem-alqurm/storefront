import './App.css';
// import {Provider} from 'react-redux';
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
// import store from './store/index.js'
import Products from './components/storefront/products.js';
import SimpleCart from './components/simplecart/simplecart.js';
import { Route } from 'react-router-dom';
import Cart from './components/shopping-cart/shopping-cart.js';
import Detail from './components/products/details.js';


function App() {
  return (
    <>
      {/* <Provider store={store()}> */}
        <Header />
        <SimpleCart />
        <main>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={Detail} />
        </main>
        <Footer />
      {/* </Provider> */}
    </>
  );
}

export default App;