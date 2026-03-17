export interface ISignUpState {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  token: string | null;
  forPassEmailSuccess: boolean;
  forPassOTPSuccess: boolean;
  forPassNewPassSuccess: boolean;
}

export interface ISignUpForm {
  name: string;
  role: string;
  profession: string[];
  city: string;
  countryCode: string;
  phoneNumber: string;
  phoneNumber1?: string | null;
  address: string;
  email: string;
  password: string;
  confirm_password: string;
  photo: string | null;
}

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IForgotPasswordStep1 {
  email: string;
}
export interface IForgotPasswordStep2 {
  email: string;
  otp: string;
}
export interface IForgotPasswordStep3 {
  email: string;
  new_password: string;
}
