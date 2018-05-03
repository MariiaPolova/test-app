import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render((
        <App />
), document.getElementById('root'));
registerServiceWorker();
