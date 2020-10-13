import * as React from 'react';
import { useFormikContext } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button, { ButtonVariant } from 'components/Button';

interface Props {
  loading: boolean;
}
const MovieFormActions = ({ loading }: Props) => {
  const { dirty, resetForm } = useFormikContext();

  const resetDisabled = React.useMemo(() => !dirty || loading, [
    dirty,
    loading,
  ]);

  return (
    <>
      <Button
        className={
          resetDisabled ? ButtonVariant.Disabled : ButtonVariant.Outlined
        }
        type="reset"
        onClick={() => resetForm()}
        disabled={resetDisabled}
      >
        reset
      </Button>
      <Button
        className={loading ? ButtonVariant.Disabled : ButtonVariant.Contained}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <FontAwesomeIcon
            className="loader-icon"
            size="2x"
            icon={faSpinner}
            spin
          />
        ) : (
          'submit'
        )}
      </Button>
    </>
  );
};

export default MovieFormActions;
