import * as React from 'react';
import styled from 'styles/styled-components';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const DateInput = styled(Input).attrs({
  type: 'date',
})``;

interface Props {
  id: string;
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateControl = (props: Props) => {
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <DateInput id={props.id} value={props.value} onChange={props.onChange} />
      <ErrorMsg>Some generic error</ErrorMsg>
    </>
  );
};

export default DateControl;
