import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import './index.css';
import App from './containers/App';

ReactDOM.render(<Provider store={configureStore()}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
