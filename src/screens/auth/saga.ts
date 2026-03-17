import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../services/http-service';

import {
  loginEndpoint,
  signupEndpoint,
  forgotPasswordEmailEndPoint,
  forgotPasswordOtpEndPoint,
  forgotPasswordNewPassEndPoint,
} from './endpoint';

import {
  forgotPasswordEmailSuccess,
  forgotPasswordStep1,
  forgotPasswordStep2,
  loginSuccess,
  signin,
  signup,
  forgotPasswordOTPSuccess,
  forgotPasswordStep3,
  forgotPasswordNewPassSuccess,
} from './slice';
import { ISignUpForm } from './type';
import { AxiosError } from 'axios';

function* SignUpSaga({ payload }: ReturnType<typeof signup>): any {
  try {
    const formData = new FormData();

    for (const key of Object.keys(payload) as (keyof ISignUpForm)[]) {
      const value = payload[key];

      if (key === 'photo' && value) {
        formData.append(key, {
          uri: value,
          name: 'photo.jpg',
          type: 'image/jpeg',
        } as any);
      } else if (Array.isArray(value)) {
        value.forEach(item => formData.append(key, item));
      } else if (value !== undefined && value !== null && value !== '') {
        formData.append(key, value);
      }
    }

    const res = yield call(request.post, signupEndpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('API-SIGNUP-->', res.data);
    if (res.data?.token) {
      yield put(loginSuccess(res.data.token));
    }
  } catch (err) {
    const error = err as any;
    console.log('API-ERROR-SIGNUP-->', error.response?.data || error.message);
  }
}

function* SignInSaga({ payload }: ReturnType<typeof signin>): any {
  try {
    const res = yield call(request.post, loginEndpoint, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('API-SIGNIN-->', res.data);
    if (res.data?.token) {
      yield put(loginSuccess(res.data.token));
    }
  } catch (err) {
    const error = err as any;
    console.log('API-ERROR-SIGNIN-->', error.response?.data || error.message);
  }
}

function* ForgotPasswordStep1({
  payload,
}: ReturnType<typeof forgotPasswordStep1>): any {
  try {
    const res = yield call(request.post, forgotPasswordEmailEndPoint, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('API-FORGOT_EMAIL-RES-->', res.data);
    if (res.data.message === 'OTP sent to your email')
      yield put(forgotPasswordEmailSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* ForgotPasswordStep2({
  payload,
}: ReturnType<typeof forgotPasswordStep2>): any {
  try {
    const res = yield call(request.post, forgotPasswordOtpEndPoint, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('API-FORGOT_OTP-RES-->', res.data);
    if (res.data.message === 'OTP verified successfully')
      yield put(forgotPasswordOTPSuccess());
  } catch (err) {
    const error = err as AxiosError;
    console.log('API-FORGOT_OTP-ERROR-->', error.response?.data);
  }
}
function* ForgotPasswordStep3({
  payload,
}: ReturnType<typeof forgotPasswordStep3>): any {
  try {
    const res = yield call(
      request.post,
      forgotPasswordNewPassEndPoint,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('API-FORGOT_New_PASS_RES-->', res.data);
    if (res.data.message === 'Password reset successful')
      yield put(forgotPasswordNewPassSuccess());
  } catch (err) {
    const error = err as AxiosError;
    console.log('API-FORGOT_New_PASS_ERROR-->', error.response?.data);
  }
}

export function* authSaga() {
  yield takeLatest(signup, SignUpSaga);
  yield takeLatest(signin, SignInSaga);
  yield takeLatest(forgotPasswordStep1, ForgotPasswordStep1);
  yield takeLatest(forgotPasswordStep2, ForgotPasswordStep2);
  yield takeLatest(forgotPasswordStep3, ForgotPasswordStep3);
}
