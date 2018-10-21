import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Results from './store/reducers/Results';
import Counter from './store/reducers/Counter';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    res: Results,
    ctr: Counter
});

/*
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
MIDDLEWARE
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
*/
const logger = store => next => action => {
	console.log('[Middleware] Dispatching ', action);
	const result = next(action);
	console.log('[Middleware] next state ', store.getState());
	return result;
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const app = <Provider store={store}><App /></Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
