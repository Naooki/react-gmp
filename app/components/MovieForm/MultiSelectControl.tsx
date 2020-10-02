import * as React from 'react';
import styled from 'styles/styled-components';
import { lighten } from 'polished';
import { useField } from 'formik';

import ControlWrapper from './ControlWrapper';
import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const OptionsWrapper = styled.div`
  position: relative;
`;
const Options = styled.ul`
  position: absolute;
  z-index: 1;
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
  cursor: pointer;

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
  name: string;
  label: string;
  options: { id: string; label: string }[];
  placeholder?: string;
  validate?: (value: string[]) => string | undefined;
}
const MutliSelectControl = ({
  label,
  name,
  placeholder,
  validate,
  ...props
}: Props) => {
  const [, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;
  const isInvalid = React.useMemo(() => meta.touched && meta.error, [meta]);
  const [isOpenned, toggleOpen] = React.useState(false);

  const inputValue = React.useMemo(() => value?.join(', ') || '', [value]);

  const onToggle = React.useCallback(() => {
    toggleOpen(!isOpenned);
  }, [isOpenned, toggleOpen]);

  const isOptionSelected = (option: { label: string }) =>
    !!value?.find(val => val === option.label);

  const selectedOptionChange = (option: { id: string; label: string }) => {
    const isSelected = isOptionSelected(option);
    const selection = isSelected
      ? value.filter(val => val !== option.label)
      : [...(value || []), option.label];
    setValue(selection);
  };

  return (
    <ControlWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        readOnly
        id={name}
        value={inputValue}
        placeholder={placeholder}
        onClick={onToggle}
      />
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
      {isInvalid ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </ControlWrapper>
  );
};

export default MutliSelectControl;
