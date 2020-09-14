import * as React from 'react';
import styled from 'styles/styled-components';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const TextInput = styled(Input).attrs({
  type: 'text',
})``;

interface Props {
  id: string;
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextControl = (props: Props) => {
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <TextInput
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      <ErrorMsg>Some generic error</ErrorMsg>
    </>
  );
};

export default TextControl;
