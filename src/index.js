import React from 'react';
import { render } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import storeConfig from './Redux/Store';


const { persistor, store } = storeConfig();

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
