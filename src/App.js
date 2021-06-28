import './App.css';
import {Provider} from 'react-redux';
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import store from './store/index.js'
import Products from './components/storefront/products.js';
import Storefront from './components/storefront/storefront.js';


function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <main>
          <Products />

        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;