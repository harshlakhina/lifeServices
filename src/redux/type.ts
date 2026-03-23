export interface UserState {
  token: string | null;
}

export interface AuthResponse {
  token?: string;
  message: string;
}

export type LoginResponse = AuthResponse;

type ImageType = {
  uri: string;
  fileName?: string;
  type?: string;
};
export interface SignupRequest {
  photo: ImageType | null;
  name: string;
  profession: string[];
  countryCode: string;
  city: string;
  role: string;
  address: string;
  phoneNumber: string;
  phoneNumber1?: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type SignupResponse = AuthResponse;

export interface ForgotPasswordEmailRequest {
  email: string;
}

export interface ForgotPasswordOtpRequest {
  email: string;
  otp: string;
}

export interface ForgotPasswordResetRequest {
  email: string;
  new_password: string;
}

export interface ForgotPasswordResponse {
  message: string;
}
