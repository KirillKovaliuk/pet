import { FieldError } from 'react-hook-form';

export const getErrorMessages = (fieldErrors: FieldError): string[] => {
  if (!fieldErrors) {
    return [];
  }

  const { types } = fieldErrors;
  const isAllCriteriaMode = !!types;

  if (isAllCriteriaMode) {
    return Object.values(types || {}) as string[];
  }

  return [fieldErrors.message!];
};
