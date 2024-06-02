import { ReactNode } from 'react';

import { IFormField } from '../../form-field';

import { TEXT_FIELD_HEIGHTS_MAP } from './text-field.constants';

export type TTextFieldSize = keyof typeof TEXT_FIELD_HEIGHTS_MAP;

export interface ITextFieldProps extends IFormField {
  label: string;
  size?: TTextFieldSize;
  destructive?: boolean;
}

export interface ITextFieldBorderProps {
  children: ReactNode;
  size: TTextFieldSize;
  destructive?: boolean;
  disabled?: boolean;
}

export interface ITextFieldLabelProps {
  children: ReactNode;
  htmlFor: string;
}

export interface ITextFieldInputProps extends IFormField {
  id?: string;
}

export interface ITextFieldBorderStyles {
  $size: TTextFieldSize;
  $destructive?: boolean;
  $disabled?: boolean;
}
