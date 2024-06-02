import { useTheme } from '../../../../../components';
import { getThemeVariablesForStorybook } from '../../../../../components/global-styles/global-styles.utils';
import { Table } from '../../table';

import { columns as commonColumns } from './variables-table.constants';
import {
  IThemeColorsTableProps,
  IVariableProps,
  IVariablesTableProps,
} from './variables-table.declarations';

export function VariablesTable({
  section,
  columns,
}: IVariablesTableProps) {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = theme.schema[section];
  const variables = getThemeVariablesForStorybook(data, section) as IVariableProps[];

  return (
    <Table columns={columns} data={variables} />
  );
}

export function ThemeColorsTable({
  section,
}: IThemeColorsTableProps) {
  return (
    <VariablesTable columns={commonColumns} section={section} />
  );
}
