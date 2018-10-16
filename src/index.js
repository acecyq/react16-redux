import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// import Reducer from './store/Reducer';
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
const store = createStore(rootReducer);
const app = <Provider store={store}><App /></Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
