import { legacy_createStore as createStore, combineReducers } from 'redux';
import logedUserReducer from '../Features/login/redux/loginReducer';
import signupReducer from '../Features/signup/redux/signupReducer';

const rootReducer = combineReducers({
  login: logedUserReducer,
  signup: signupReducer,
});

const store = createStore(rootReducer);

export default store;
