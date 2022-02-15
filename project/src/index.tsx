import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const settings = {
  OFFERS_QUANTITY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersQuantity={settings.OFFERS_QUANTITY}/>
  </React.StrictMode>,
  document.getElementById('root'));
