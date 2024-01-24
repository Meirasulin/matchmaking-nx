import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from '@apollo/client';
import { TypeLogedSimpleUserInfo } from '../types/loginTypes';

// export type TypeLoginResponse = {
//   data: {
//     login: {
//       loginResponse: {
//         userDetails: TypeLogedSimpleUserInfo;
//         jwtToken: string;
//       };
//     };
//   };
// };
type TypeParams = {
  email: string;
  password: string;
  tablename: string;
  loginFun: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<any>;
};

type TypeinitialState = {
  logedUser: TypeLogedSimpleUserInfo | undefined;
  loading: boolean;
  error: boolean;
};

const initialState: TypeinitialState = {
  logedUser: undefined,
  loading: false,
  error: false,
};

export const fetchLogin = createAsyncThunk(
  'fetch-login',
  async ({ email, password, tablename, loginFun }: TypeParams) => {
    const { data } = await loginFun({
      variables: { input: { email, password, tablename } },
    });
    const { userDetails, jwtToken } = data.login.loginResponse;
    localStorage.setItem('TOKEN', jwtToken);
    return JSON.parse(userDetails);
  }
);

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    logedUserInfo: (
      state: TypeinitialState,
      action: PayloadAction<TypeLogedSimpleUserInfo>
    ) => {
      return {
        ...state,
        logedUser: { ...action.payload },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(
        fetchLogin.fulfilled,
        (state, action: PayloadAction<TypeLogedSimpleUserInfo>) => {
          return {
            ...state,
            loading: false,
            error: false,
            logedUser: { ...action.payload },
          };
        }
      )
      .addCase(fetchLogin.rejected, (state) => {
        return {
          ...state,
          loading: false,
          error: true,
          logedUser: undefined,
        };
      });
  },
});

export const { logedUserInfo } = loginSlice.actions;
export default loginSlice.reducer;
