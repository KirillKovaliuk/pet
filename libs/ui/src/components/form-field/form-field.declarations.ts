import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

export type TPolymorphicProps<
  ParentComponentProps extends ElementType,
  ChildComponentProps = object,
> = (
  PropsWithChildren<ChildComponentProps> &
  Omit<ComponentPropsWithoutRef<ParentComponentProps>, keyof ChildComponentProps>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TEventOrValue = any;

export interface IFormField {
  value?: TEventOrValue;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?(...eventOrValue: TEventOrValue[]): void;
  onBlur?(eventOrValue: TEventOrValue): void;
  onFocus?(eventOrValue: TEventOrValue): void;
}

export interface IFormFieldProps<TComponent> extends IFormField {
  name: string;
  component: TComponent;
  hint?: string;
  className?: string;
}
