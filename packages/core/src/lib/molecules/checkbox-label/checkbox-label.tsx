import React, { ElementType } from 'react';

import { CheckboxProps } from './checkbox-label.model';
import { Checkbox, ErrorMessage, Label, Stack } from 'lib/atoms';

export default function CheckboxLabel<C extends ElementType = 'div'>(
  props: CheckboxProps<C>,
) {
  const {
    onChange,
    error,
    errorMessage = '',
    success,
    label = '',
    name = '',
  } = props;

  return (
    <Stack direction="column" spacing={0}>
      <Stack direction="row-reverse" justifyContent="center">
        {label.length > 0 && (
          <Label htmlFor={name} success={success} error={error} text={label} />
        )}
        <Checkbox onChange={onChange} success={success} error={error} />
      </Stack>
      {error && <ErrorMessage error={error} message={errorMessage} />}
    </Stack>
  );
}
