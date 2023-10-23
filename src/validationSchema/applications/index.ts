import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  applied_at: yup.date().nullable(),
  interview_at: yup.date().nullable(),
  offer_at: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  recruitment_id: yup.string().nullable().required(),
});
