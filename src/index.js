import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GameReducer from './reducers/GameReducer'

const store = createStore(GameReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
