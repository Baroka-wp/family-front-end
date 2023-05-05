import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import personReducer from './persons/person';
import genealogyReducer from './persons/genealogy';

const rootReducer = combineReducers({
  persons: personReducer,
  genealogy: genealogyReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
