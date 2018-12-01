import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import './index.css';
import App from './containers/App';
import Character from './models/Character';

const store = configureStore({
  currentPage: "Title",
  characters: [],
  inviteCharacters: Character.all()
})
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
