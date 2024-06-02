export type TControlArgument = 'text' | 'boolean' | 'radio' | 'select' | 'none';

export interface IArgumentType {
  control?: TControlArgument;
  options?: string[] | number[];
  description?: string;
  type?: string;
  defaultValue?: unknown;
  required?: boolean;
}

export type TStoryOptions = string[] | number[] | undefined;
