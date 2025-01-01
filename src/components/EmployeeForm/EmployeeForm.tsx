import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  EmployeeFormContainer,
  InputsContainer,
} from './styles';
import { EmployeeFormValue, EMPLOYEE_FORM_NAMES } from './types';
import Checkbox from '../CheckBox/CheckBox';
import { useContext } from 'react';
import { UserDataContext } from '../Layout/Layout';

function EmployeeForm() {
  const nameRegx = /^[a-zA-Z]+$/;

  const {onSubmitChange} = useContext(UserDataContext);

  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('Field name is required')
      .test(
        'Check min and max name length',
        'Min 2 and Max 50 symbols',
        (value) => value.length >= 2 && value.length <= 50
      )
      .matches(nameRegx, 'Name must contain only latin letters'),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('Field surname is required')
      .test(
        'Check surname length',
        'Max 15 symbols',
        (value) => value.length <= 15
      )
      .matches(nameRegx, 'Surname must contain only latin letters'),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number().max(80, 'Max 80').min(18, 'Min 18'),
    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
      .required('Field position is required')
      .test(
        'Check max age length',
        'Max 30 Symbols',
        (value) => value.length <= 30
      ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.AGE]: '',
      [EMPLOYEE_FORM_NAMES.POSITION]: '',
      [EMPLOYEE_FORM_NAMES.USAGE_RULES]: false,
    } as EmployeeFormValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValue) => {
      onSubmitChange({
        name: values.first_name,
        surname: values.last_name,
        age: values.age,
        position: values.position,
      })
      formik.resetForm();
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          id='first_name'
          placeholder='John'
          label='Name*'
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          id='last_name'
          placeholder='Johnson'
          label='Surname*'
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          type='number'
          id='age'
          placeholder='25'
          label='Age'
          value={String(formik.values[EMPLOYEE_FORM_NAMES.AGE])}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id='position'
          placeholder='QA'
          label='Position*'
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
        <Checkbox
          name={EMPLOYEE_FORM_NAMES.USAGE_RULES}
          id='usage_rules'
          label='Agree to Usage Rules'
          value={formik.values[EMPLOYEE_FORM_NAMES.USAGE_RULES]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.USAGE_RULES]}
        />
      </InputsContainer>
      <Button
        name='Create'
        type='submit'
        disabled={!formik.values.usage_rules}
      />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
