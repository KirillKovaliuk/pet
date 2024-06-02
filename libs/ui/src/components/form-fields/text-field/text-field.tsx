/* eslint-disable func-names */
import { useId } from 'react';

import { SIZES } from '../../../constants';
import { Typography } from '../../typography';

import {
  ITextFieldBorderProps,
  ITextFieldInputProps,
  ITextFieldLabelProps,
  ITextFieldProps,
} from './text-field.declarations';

import {
  StyledTextFieldBorder,
  StyledTextFieldInput,
  StyledTextFieldLabel,
} from './text-field.styles';

export function TextField({
  label,
  value,
  onChange,
  size = SIZES.SMALL,
  destructive,
  disabled,
}: ITextFieldProps) {
  const fieldId = useId();

  return (
    <TextField.Label htmlFor={fieldId}>
      <Typography variant="span" size="small" weight="medium">
        {label}
      </Typography>
      <TextField.Border size={size} destructive={destructive} disabled={disabled}>
        <TextField.Input id={fieldId} value={value} onChange={onChange} disabled={disabled} />
      </TextField.Border>
    </TextField.Label>
  );
}

TextField.Label = function ({
  children,
  htmlFor,
}: ITextFieldLabelProps) {
  return (
    <StyledTextFieldLabel htmlFor={htmlFor}>{children}</StyledTextFieldLabel>
  );
};

TextField.Input = function (props: ITextFieldInputProps) {
  return (
    <StyledTextFieldInput {...props} />
  );
};

TextField.Border = function ({
  destructive,
  children,
  size,
  disabled,
}: ITextFieldBorderProps) {
  return (
    <StyledTextFieldBorder
      $size={size}
      $destructive={destructive}
      $disabled={disabled}
    >
      {children}
    </StyledTextFieldBorder>
  );
};
