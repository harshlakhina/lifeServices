import * as yup from 'yup';

export const ForgotPasswordSchema = yup.object({
  otp: yup.string(),
  email: yup.string(),
  new_password: yup.string().required('New Password is required'),
  confirm_new_password: yup
    .string()
    .oneOf([yup.ref('new_password')], 'Password must be same')
    .required('Confirm New Password is required'),
});
