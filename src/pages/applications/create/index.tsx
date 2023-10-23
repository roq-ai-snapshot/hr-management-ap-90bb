import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { applicationValidationSchema } from 'validationSchema/applications';
import { UserInterface } from 'interfaces/user';
import { RecruitmentInterface } from 'interfaces/recruitment';
import { ApplicationInterface } from 'interfaces/application';

function ApplicationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ApplicationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.application.create({ data: values as RoqTypes.application });
      resetForm();
      router.push('/applications');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ApplicationInterface>({
    initialValues: {
      status: '',
      applied_at: new Date(new Date().toDateString()),
      interview_at: new Date(new Date().toDateString()),
      offer_at: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
      recruitment_id: (router.query.recruitment_id as string) ?? null,
    },
    validationSchema: applicationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Applications',
              link: '/applications',
            },
            {
              label: 'Create Application',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Application
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="applied_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Applied At
            </FormLabel>
            <DatePicker
              selected={formik.values?.applied_at ? new Date(formik.values?.applied_at) : null}
              onChange={(value: Date) => formik.setFieldValue('applied_at', value)}
            />
          </FormControl>
          <FormControl id="interview_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Interview At
            </FormLabel>
            <DatePicker
              selected={formik.values?.interview_at ? new Date(formik.values?.interview_at) : null}
              onChange={(value: Date) => formik.setFieldValue('interview_at', value)}
            />
          </FormControl>
          <FormControl id="offer_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Offer At
            </FormLabel>
            <DatePicker
              selected={formik.values?.offer_at ? new Date(formik.values?.offer_at) : null}
              onChange={(value: Date) => formik.setFieldValue('offer_at', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<RecruitmentInterface>
            formik={formik}
            name={'recruitment_id'}
            label={'Select Recruitment'}
            placeholder={'Select Recruitment'}
            fetcher={() => roqClient.recruitment.findManyWithCount({})}
            labelField={'position'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/applications')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'application',
    operation: AccessOperationEnum.CREATE,
  }),
)(ApplicationCreatePage);
