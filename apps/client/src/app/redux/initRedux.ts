import { legacy_createStore as createStore, combineReducers } from 'redux';
import signupReducer from '../Features/signup/redux/signupReducer';

const rootReducer = combineReducers({

  signup: signupReducer,
});

const store = createStore(rootReducer);

export default store;
