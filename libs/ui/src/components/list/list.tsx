import classNames from 'classnames';

import { DEFAULT_GAP } from './list.constants';
import { IListProps } from './list.declarations';

import { StyledList } from './list.styles';

export function List<T>({
  data,
  children: renderItem,
  className,
  gap = DEFAULT_GAP, // @TODO: update gap values with spacing constants.
  horizontal = false,
  wrap = false,
} : IListProps<T>) {
  if (!(data && data.length)) {
    return null;
  }

  return (
    <StyledList
      className={classNames(className, 'list')}
      $horizontal={horizontal}
      $gap={gap}
      $wrap={wrap}
    >
      {data.map((item, index) => {
        const key = item?.id || index;
        const value = renderItem(item, index, data);

        return (
          <li key={key} className="list-item">
            {value}
          </li>
        );
      })}
    </StyledList>
  );
}
