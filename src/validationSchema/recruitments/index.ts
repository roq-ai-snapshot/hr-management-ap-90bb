import * as yup from 'yup';

export const recruitmentValidationSchema = yup.object().shape({
  position: yup.string().nullable(),
  description: yup.string().nullable(),
  requirements: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  posted_at: yup.date().nullable(),
  closed_at: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
