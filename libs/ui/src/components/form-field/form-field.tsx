import { ElementType } from 'react';
import { Controller } from 'react-hook-form';

import { List } from '../list';
import { Typography } from '../typography';

import { DEFAULT_FORM_FIELD_ELEMENT } from './form-field.constants';
import {
  IFormFieldProps,
  TEventOrValue,
  TPolymorphicProps,
} from './form-field.declarations';
import { getErrorMessages } from './form-field.utils';

import { StyledFormFieldWrapper } from './form-field.styles';

export function FormField <FormComponent extends ElementType = typeof DEFAULT_FORM_FIELD_ELEMENT>({
  name,
  component,
  onChange,
  onBlur,
  hint,
  className,
  ...props
}: TPolymorphicProps<FormComponent, IFormFieldProps<FormComponent>>) {
  const FormFieldComponent = component ?? DEFAULT_FORM_FIELD_ELEMENT;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderField = (formProps: any) => {
    const { field, formState: { errors } } = formProps;
    const {
      ref,
      onChange: onChangeField,
      onBlur: onBlurField,
      ...restFieldProps
    } = field;
    const errorMessages = getErrorMessages(errors[name]);
    const destructive = !!errorMessages.length;

    const handleChange = (...eventOrValue: TEventOrValue[]): void => {
      onChangeField(...eventOrValue);

      onChange?.(...eventOrValue);
    };

    const handleBlur = (eventOrValue: TEventOrValue): void => {
      onBlurField();

      onBlur?.(eventOrValue);
    };

    return (
      <StyledFormFieldWrapper className={className}>
        <FormFieldComponent
          {...restFieldProps}
          {...props}
          name={name}
          className="field"
          onChange={handleChange}
          onBlur={handleBlur}
          destructive={destructive}
        />
        { destructive && (
          <List data={errorMessages} gap={6}>
            {(message) => (
              <Typography weight="regular" color="error-primary" size="small">
                {message}
              </Typography>
            )}
          </List>
        ) }
        { (!destructive && hint) && (
          <Typography weight="regular" color="tertiary" size="small">
            {hint}
          </Typography>
        ) }
      </StyledFormFieldWrapper>
    );
  };

  return (
    <Controller name={name} render={renderField} />
  );
}
