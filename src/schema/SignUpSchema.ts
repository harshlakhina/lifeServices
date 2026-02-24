import * as yup from 'yup';

export const SignUpSchema = yup.object({
  name: yup.string().required('Name is Required'),
  profession: yup.array().of(yup.string()).required('Profession is Required'),
  country: yup.array().of(yup.string()).required('Country is Required'),
  city: yup.array().of(yup.string()).required('City is Required'),
  address: yup.string().required('Address is Required'),
  phoneNo:yup.number().required("Phone No is required"),
  email: yup.string().required('Email is Required'),
  password: yup.string().required('Password is Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be same')
    .required('Password is Required'),
});
