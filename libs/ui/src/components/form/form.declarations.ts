import { FormEventHandler, ReactNode } from 'react';
import {
  CriteriaMode,
  FieldValues,
  Mode,
  UseFormReturn,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export type TFormContext = object;

export interface IFormProps<TFieldValues extends FieldValues> extends UseFormReturn<TFieldValues> {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className?: string;
}

export interface IUseFormProps {
  validationSchema: AnyObjectSchema;
  defaultValues: FieldValues;
  mode?: Mode;
  context?: TFormContext;
  criteriaMode?: CriteriaMode;
}
