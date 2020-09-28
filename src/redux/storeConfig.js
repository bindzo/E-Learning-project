import {createStore} from 'redux';
import {combineReducers, applyMiddleware, compose } from 'redux';
import course from './reducers/course'
import thunk from "redux-thunk";
// import auth from './reducers/authReducer'
const reducer = combineReducers({
  // auth,
  course
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunk))
);

export default store;