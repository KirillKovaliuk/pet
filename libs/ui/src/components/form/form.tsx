import { FieldValues, FormProvider } from 'react-hook-form';

import type { IFormProps } from './form.declarations';

import { StyledForm } from './form.styles';

export function Form <TFieldValues extends FieldValues>({
  onSubmit,
  children,
  className,
  ...formMethods
}: IFormProps<TFieldValues>) {
  return (
    <FormProvider {...formMethods}>
      <StyledForm className={className} onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </FormProvider>
  );
}
