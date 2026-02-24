import * as yup from 'yup';

export const ForgotPasswordSchema = yup.object({
  newPassword: yup.string().required('New Password is required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Password must be same')
    .required('Confirm New Password is required'),
});
