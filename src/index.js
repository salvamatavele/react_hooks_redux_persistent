import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './app/configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
