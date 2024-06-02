import {
  FieldValues,
  useForm as useReactHookForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { IUseFormProps, TFormContext } from './form.declarations';

export const useForm = <TFieldValues extends FieldValues, TContext = TFormContext>({
  validationSchema,
  defaultValues,
  mode,
  context,
  criteriaMode = 'all',
}: IUseFormProps): UseFormReturn<TFieldValues, TContext> => {
  const formMethods = useReactHookForm<TFieldValues, TContext>({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode,
    context,
    criteriaMode,
  } as UseFormProps<TFieldValues, TContext>);

  return formMethods;
};
