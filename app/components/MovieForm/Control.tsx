import * as React from 'react';
import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import ControlWrapper from './ControlWrapper';
import Label from './Label';
import ErrorMsg from './ErrorMsg';

const withControl = (InputComponent: React.FC) => {
  return ({ label, name, type, validate, ...props }: any) => {
    const [field, meta, helpers] = useField({ name, type, validate });

    const isInvalid = React.useMemo(() => meta.touched && meta.error, [meta]);

    return (
      <ControlWrapper>
        <Label htmlFor={name}>{label}</Label>
        <InputComponent
          className={isInvalid ? 'invalid' : ''}
          id={name}
          {...field}
          {...meta}
          {...helpers}
          {...props}
          type={type}
          value={field.value}
        />
        {validate && props.validating && (
          <FontAwesomeIcon className="loader-icon" icon={faSpinner} spin />
        )}
        {isInvalid ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
      </ControlWrapper>
    );
  };
};

export default withControl;
