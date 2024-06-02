import styled from 'styled-components';

import { toPixels } from '../../utils';

import { DEFAULT_SIZE } from './icon.constants';
import { IIconStyles } from './icon.declarations';

const setSize = ({ $size }: IIconStyles) => {
  if ($size) {
    return typeof $size === 'number' ? toPixels($size) : 'fit-content';
  }

  return toPixels(DEFAULT_SIZE);
};

export const StyledIcon = styled.span<IIconStyles>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${setSize};
  height: ${setSize};

  svg {
    width: ${setSize};
    height: ${setSize};
  }
`;
