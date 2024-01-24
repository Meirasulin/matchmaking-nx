import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/login/redux/loginSlice';
import signupReducer from '../Features/signup/redux/signupSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
