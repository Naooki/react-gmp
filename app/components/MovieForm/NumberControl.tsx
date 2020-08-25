import * as React from 'react';
import styled from 'styles/styled-components';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const NumberInput = styled(Input).attrs({
  type: 'number',
})``;

interface Props {
  id: string;
  value: number;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberControl = (props: Props) => {
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <NumberInput
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      <ErrorMsg>Some generic error</ErrorMsg>
    </>
  );
};

export default NumberControl;
