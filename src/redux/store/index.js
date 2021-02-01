import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { history } from '../../routes';

const allMiddleware = [
  thunk
];

if (process.env.NODE_ENV !== 'production') {
  allMiddleware.push(immutableStateInvariantMiddleware());
}
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
console.log("jjj")
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...allMiddleware, routerMiddleware(history)))
);