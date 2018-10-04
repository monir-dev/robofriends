import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import './index.css';
import 'tachyons';

import { searchRobots, requestRobots } from './Actions/Reducers';

const rootReducers = combineReducers({ searchRobots, requestRobots });

const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(ReduxThunk, logger));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
