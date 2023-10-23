import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  position: yup.string().nullable(),
  joined_at: yup.date().nullable(),
  left_at: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
