import * as yup from 'yup';

export const NewDiplomaSchema = yup.object({
  document_name: yup.string().required('Name is Required'),
  document_type: yup.string().required('Document Type is required'),
  document_description: yup.string().required('Description is required'),
  image: yup.string().nullable().defined(),
});
