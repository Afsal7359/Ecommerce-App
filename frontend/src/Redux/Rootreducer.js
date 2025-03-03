// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './Cartreducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers if needed
});

export default rootReducer;
