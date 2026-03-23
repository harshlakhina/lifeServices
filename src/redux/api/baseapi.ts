import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';
import { BASE_URL } from '../../config';
import {
  ForgotPasswordEmailRequest,
  ForgotPasswordOtpRequest,
  ForgotPasswordResetRequest,
  ForgotPasswordResponse,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from '../type';
import {
  forgotPasswordEmailEndPoint,
  forgotPasswordNewPassEndPoint,
  forgotPasswordOtpEndPoint,
  loginEndpoint,
  signupEndpoint,
} from '../endpoint';
import { LoginRequest } from '../../screens/auth/type';

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: body => ({
        url: loginEndpoint,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: body => {
        const formData = new FormData();

        formData.append('name', body.name);
        formData.append('email', body.email);
        formData.append('password', body.password);
        formData.append('confirm_password', body.confirm_password);
        formData.append('role', body.role);
        formData.append('city', body.city);
        formData.append('address', body.address);
        formData.append('countryCode', body.countryCode);
        formData.append('phoneNumber', body.phoneNumber);

        body.profession.forEach((item: string) => {
          formData.append('profession', item);
        });

        if (body.phoneNumber1) {
          formData.append('phoneNumber1', body.phoneNumber1);
        }
        if (body.photo?.uri) {
          formData.append('photo', {
            uri: body.photo.uri,
            name: body.photo.fileName || `photo_${Date.now()}.jpg`,
            type: body.photo.type || 'image/jpeg',
          } as any);
        }

        console.log('PAYLOAD--->', formData);

        return {
          url: signupEndpoint,
          method: 'POST',
          body: formData,
        };
      },
    }),

    requestPasswordReset: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordEmailRequest
    >({
      query: body => ({
        url: forgotPasswordEmailEndPoint,
        method: 'POST',
        body,
      }),
    }),

    verifyPasswordResetOtp: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordOtpRequest
    >({
      query: body => ({
        url: forgotPasswordOtpEndPoint,
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordResetRequest
    >({
      query: body => ({
        url: forgotPasswordNewPassEndPoint,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useRequestPasswordResetMutation,
  useVerifyPasswordResetOtpMutation,
  useResetPasswordMutation,
} = baseApi;
