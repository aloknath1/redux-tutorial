import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});
const store = createStore(
                            allReducers,
                            {
                                products: [{name:'iphone'}],
                                user: 'Alok'
                            }
                        );

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
