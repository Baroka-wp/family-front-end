import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import personReducer from './persons/person';

const rootReducer = combineReducers({
  persons: personReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
