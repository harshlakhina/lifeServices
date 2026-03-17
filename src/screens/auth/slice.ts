import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  IForgotPasswordStep1,
  IForgotPasswordStep2,
  IForgotPasswordStep3,
  ISignInForm,
  ISignUpForm,
  ISignUpState,
} from './type';

const initialState: ISignUpState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  token: null,
  forPassEmailSuccess: false,
  forPassOTPSuccess: false,
  forPassNewPassSuccess: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    forgotPasswordEmailSuccess: state => {
      state.forPassEmailSuccess = true;
    },
    forgotPasswordOTPSuccess: state => {
      state.forPassOTPSuccess = true;
    },
    forgotPasswordNewPassSuccess: state => {
      state.forPassNewPassSuccess = true;
    },
  },
});

export default slice.reducer;

export const signup = createAction<ISignUpForm>('AUTH/SIGN_UP');

export const signin = createAction<ISignInForm>('AUTH/SIGN_IN');
export const forgotPasswordStep1 = createAction<IForgotPasswordStep1>(
  'AUTH/FORGOT_PASSWORD_STEP1',
);
export const forgotPasswordStep2 = createAction<IForgotPasswordStep2>(
  'AUTH/FORGOT_PASSWORD_STEP2',
);
export const forgotPasswordStep3 = createAction<IForgotPasswordStep3>(
  'AUTH/FORGOT_PASSWORD_STEP3',
);

export const {
  loginSuccess,
  forgotPasswordEmailSuccess,
  forgotPasswordOTPSuccess,
  forgotPasswordNewPassSuccess,
} = slice.actions;
