import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().nullable(),
  feedback: yup.string().nullable(),
  reviewed_at: yup.date().nullable(),
  employee_id: yup.string().nullable().required(),
  reviewer_id: yup.string().nullable().required(),
});
