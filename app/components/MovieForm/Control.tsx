import * as React from 'react';
import styled from 'styles/styled-components';

import Label from './Label';
import TextControl from './TextControl';

const ErrorMsg = styled.div`
  padding: 0.1rem 0;
  color: ${props => props.theme.primary};
  font-size: 0.8rem;
  font-weight: 100;
`;

interface Props {
  type: 'text';
  label: string;
  id: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Control = (props: Props) => {
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <TextControl
        type="text"
        id={props.id}
        value={props.value}
        title={props.label}
        onChange={props.onChange}
      />
      <ErrorMsg>Some generic error</ErrorMsg>
    </>
  );
};

export default Control;
