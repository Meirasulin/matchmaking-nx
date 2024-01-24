import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeAtomUserInfo } from '../types/userTypes';


type TypeinitialState = {
  stepper: number;
  inputsValue: TypeAtomUserInfo | undefined;
};

const initialState: TypeinitialState = {
  stepper: 1,
  inputsValue: undefined,
};






export const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    updateUserInfo: (
      state: TypeinitialState,
      action: PayloadAction<TypeAtomUserInfo>
    ) => {
      return {
        ...state,
        inputsValue: { ...action.payload },
      };
    },
    plusstepper: (state: TypeinitialState)=>{
      return {
        ...state,
        stepper: state.stepper + 1
      }
    },
    reststepper: (state: TypeinitialState)=>{
      return {
        ...state,
        stepper: 1
      }
    },
    updateUserInfoAndStepper: (state: TypeinitialState,action: PayloadAction<TypeAtomUserInfo>)=>{
      return {
        ...state,
        stepper: state.stepper + 1,
        inputsValue: {...state.inputsValue, ...action.payload },
      }
    }
  },
})



export const { plusstepper, updateUserInfo, updateUserInfoAndStepper, reststepper } = signupSlice.actions;
export default signupSlice.reducer;
