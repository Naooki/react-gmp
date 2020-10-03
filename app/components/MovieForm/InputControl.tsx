import * as React from 'react';
import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import ControlWrapper from './ControlWrapper';
import Input from './Input';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const InputControl = ({ label, name, type, validate, ...props }: any) => {
  const [field, meta] = useField({ name, type, validate });

  const isInvalid = React.useMemo(() => meta.touched && meta.error, [meta]);

  return (
    <ControlWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        className={isInvalid ? 'invalid' : ''}
        id={name}
        {...field}
        {...props}
        type={type}
        value={field.value || ''} // handle undefined initial state
      />
      {validate && props.validating && (
        <FontAwesomeIcon className="loader-icon" icon={faSpinner} spin />
      )}
      {isInvalid ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </ControlWrapper>
  );
};

export default InputControl;