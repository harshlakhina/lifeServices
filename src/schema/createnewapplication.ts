import { isValidPhoneNumber } from 'libphonenumber-js';
import * as yup from 'yup';

export const CreateNewApplicationSchema = yup.object({
  profession_new: yup.string().required('Application is required'),
  countryCode_New: yup.string().required('Country is required'),
  phoneNumber_new: yup
    .string()
    .required('Phone number is required')
    .test('valid-phone', 'Invalid phone number', function (value) {
      const countryCode = this.parent.countryCode_New;
      if (!value || !countryCode) return false;
      return isValidPhoneNumber(value, countryCode);
    }),
  description_new: yup.string().required('Description is required'),
  image: yup.array().of(yup.string().required()).default([]),
});
