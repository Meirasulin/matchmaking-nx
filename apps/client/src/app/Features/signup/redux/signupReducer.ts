import { Action } from 'redux';
import { TypeAtomUserInfo } from '../types/userTypes';

interface ActionPayload extends Action {
  payload?: any;
}

type TypeinitialState = {
  stepper: number;
  inputsValue: TypeAtomUserInfo | undefined;
};

const initialState: TypeinitialState = {
  stepper: 1,
  inputsValue: undefined,
};

const signupReducer = (state = initialState, action: ActionPayload) => {
  switch (action.type) {
    case 'signup/stepper_incremente': {
      return {
        ...state,
        stepper: state.stepper + 1,
      };
    }
    case 'signup/stepper_reset': {
      return {
        ...state,
        stepper: state.stepper = 1,
      };
    }
    case 'signup/update_user_input_values': {
      return {
        ...state,
        inputsValue: { ...state.inputsValue, ...action.payload },
      };
    }
    default:
      return state;
    }
  };
  
  
  export const selctorStepper = (state: any) => {
    return state.logedUser;
  };
  
  
  export default signupReducer;
  