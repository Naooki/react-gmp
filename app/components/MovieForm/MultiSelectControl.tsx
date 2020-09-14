import * as React from 'react';
import styled from 'styles/styled-components';
import { lighten } from 'polished';

import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const OptionsWrapper = styled.div`
  position: relative;
`;
const Options = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: ${props => props.theme.componentBackground};
  box-shadow: 0 0.3rem 1rem #000;
  color: ${props => props.theme.text};
`;
const Option = styled.li`
  padding: 0.5rem 1rem;
  &:hover {
    background: ${props => lighten(0.05, props.theme.componentBackground)};
  }

  &:before {
    content: '✓';
    padding: 0.08rem 0.2rem;
    margin-right: 0.5rem;
    color: ${props => props.theme.text};
    background: ${props => props.theme.text};
    border-radius: 0.2rem;
    font-size: 0.8rem;
  }
  &.checked:before {
    background: ${props => props.theme.primary};
  }
`;

interface Props {
  id: string;
  value: { id: string; label: string }[];
  label: string;
  placeholder: string;
  options: { id: string; label: string }[];
  onChange: (value: { id: string; label: string }[]) => void;
}

const MutliSelectControl = (props: Props) => {
  const [isOpenned, toggleOpen] = React.useState(false);

  const onToggle = () => {
    toggleOpen(!isOpenned);
  };

  const isOptionSelected = (option: { id: string }) =>
    props.value.find(val => val.id === option.id);

  const selectedOptionChange = (option: { id: string; label: string }) => {
    const selectedOption = isOptionSelected(option);
    const selection = selectedOption
      ? props.value.filter(val => val.id !== selectedOption.id)
      : [...props.value, option];
    props.onChange(selection);
  };

  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input id={props.id} placeholder={props.placeholder} onClick={onToggle} />
      <OptionsWrapper>
        {isOpenned && (
          <Options>
            {props.options.map(option => (
              <Option
                key={option.id}
                className={isOptionSelected(option) ? 'checked' : ''}
                onClick={() => selectedOptionChange(option)}
              >
                {option.label}
              </Option>
            ))}
          </Options>
        )}
      </OptionsWrapper>
      <ErrorMsg>Some generic error</ErrorMsg>
    </>
  );
};

export default MutliSelectControl;
