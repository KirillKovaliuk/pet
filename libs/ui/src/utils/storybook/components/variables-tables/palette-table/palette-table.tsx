import { useTheme } from '../../../../../components';
import { convertPalette } from '../../../../../components/global-styles/global-styles.utils';
import { Table } from '../../table';
import { IVariableProps } from '../variables-table';

import { columns } from './palette-table.constants';

export function PaletteTable() {
  const theme = useTheme();

  const data = convertPalette(theme.palette);
  const variables = (data) as IVariableProps[];

  return (
    <Table columns={columns} data={variables} />
  );
}
