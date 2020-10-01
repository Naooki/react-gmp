import * as React from 'react';
import styled from 'styles/styled-components';
import { useField } from 'formik';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const TextInput = styled(Input).attrs({
  type: 'text',
})``;

const TextControl = ({ label, name, ...props }: any) => {
  const [field, meta] = useField(name);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <TextInput id={name} {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMsg>test1</ErrorMsg> : null}
    </>
  );
};

export default TextControl;
