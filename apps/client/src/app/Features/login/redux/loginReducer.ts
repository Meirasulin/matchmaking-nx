import { Action, Reducer, UnknownAction } from 'redux';
import { TypeLogedSimpleUserInfo } from '../types/loginTypes';

type TypeinitialState = {
  logedUser: TypeLogedSimpleUserInfo | undefined;
};

const initialState: TypeinitialState = {
  logedUser: undefined,
};

interface ActionPayload extends Action {
  payload: any;
}




const logedUserReducer = (state = initialState, action: ActionPayload) => {
  switch (action.type) {
    case 'login/update_loged_simple_user_info': {
      return {
        ...state,
        logedUser: { ...action.payload },
      };
    }
    default:
      return state;
  }
};


export const selectorLogedUser = (state: any) => {
    return state.logedUser;
  };

  
export default logedUserReducer;
