import styled from 'styled-components';

import { toPixels } from '../../utils';

import { IListStyles } from './list.declarations';

export const StyledList = styled.ul<IListStyles>`
  display: flex;
  flex-direction: ${({ $horizontal }) => ($horizontal ? 'row' : 'column')};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  gap: ${({ $gap }) => toPixels($gap as number)};
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
