import * as yup from 'yup';

export const SignInSchema = yup.object({
  role: yup.string().required('Role is Required'),
  email: yup
    .string()
    .required('E-mail is required')
    .email('Enter Valid Email Address'),
  password: yup.string().required('password is required'),
});
