import styled from 'styled-components';

import { PALETTE, SIZES } from '../../../constants';
import { toPixels } from '../../../utils';

import { TEXT_FIELD_HEIGHTS_MAP, TEXT_FIELD_PADDINGS_MAP } from './text-field.constants';
import {
  ITextFieldBorderStyles,
  ITextFieldInputProps,
  ITextFieldLabelProps,
} from './text-field.declarations';

import { mediumTextStyles } from '../../typography/typography.styles';

export const StyledTextFieldBorder = styled.div<ITextFieldBorderStyles>`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme, $destructive }) => theme.border[$destructive ? 'error' : 'primary']};
  border-radius: 8px; // @TODO: get from theme.
  transition: all .2s ease-in; // @TODO: move transition to theme or constants.
  box-shadow: ${({ theme }) => theme.shadow['extra-small']};
  height: ${({ $size }) => toPixels(TEXT_FIELD_HEIGHTS_MAP[$size || SIZES.SMALL])};
  padding: ${({ $size }) => TEXT_FIELD_PADDINGS_MAP[$size || SIZES.SMALL]};
  background: ${({ $disabled, theme }) => ($disabled ? theme.background['disabled-subtle'] : 'none')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};

  &:focus-within {
    box-shadow: ${({ theme, $destructive }) => theme.ring[$destructive ? 'error-shadow-xs' : 'brand-shadow-xs']};
    border: 1px solid ${({ theme, $destructive }) => theme.border[$destructive ? 'error' : 'brand']};
  }
`;

export const StyledTextFieldLabel = styled.label<ITextFieldLabelProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StyledTextFieldInput = styled.input<ITextFieldInputProps>`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  color: ${({ theme }) => theme.text.placeholder};
  ${mediumTextStyles};

  &:disabled {
    transition: all ease-in;
    color: ${({ theme }) => theme.text.disabled};
    cursor: not-allowed;
  }

  &:focus-within {
    color: ${({ theme }) => theme.text.primary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${({ theme }) => theme.text.primary};
    caret-color: ${({ theme }) => theme.text.primary};
    -webkit-box-shadow: 0 0 0px 1000px ${PALETTE.base.transparent} inset;
    transition: background-color 1000000s ease-in-out 0s;
}
`;
