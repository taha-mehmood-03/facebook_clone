import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected import statement for redux-thunk
import imageReducer from './reducers/imageReducer'; // You need to have your reducers defined
import nameChangerReducer from './reducers/nameChangerReducer';


// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  image: imageReducer,
  nameChanger: nameChangerReducer,
  
  // Add other reducers here if you have them
});

// Create the Redux store with combined reducers and applyMiddleware for async actions
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;