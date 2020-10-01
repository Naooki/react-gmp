import * as React from 'react';
import styled from 'styles/styled-components';
import { useField } from 'formik';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const NumberInput = styled(Input).attrs({
  type: 'number',
})``;

const NumberControl = ({ label, name, ...props }: any) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <NumberInput id={name} {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMsg>test</ErrorMsg> : null}
    </>
  );
};

export default NumberControl;
