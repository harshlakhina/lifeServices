import * as yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const SignUpSchema = yup.object({
  photo: yup.mixed().nullable(),
  name: yup.string().required('Name is Required'),
  profession: yup.array().of(yup.string()).required('Profession is Required'),
  // country: yup.string(),
  city: yup.string().required('City is Required'),
  address: yup.string().required('Address is Required'),

  countryCode: yup.string().required('Country is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .test('valid-phone', 'Invalid phone number', function (value) {
      const countryCode = this.parent.countryCode;
      if (!value || !countryCode) return false;
      return isValidPhoneNumber(value, countryCode);
    }),
  phoneNumber1: yup.string(),

  email: yup.string().required('Email is Required'),
  password: yup
    .string()
    .required('Password is Required')
    .min(6, 'Password should be atleast 6 letters')
    .max(6, 'Password should be atleast 6 letters'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be same')
    .required('Password is Required'),
});
