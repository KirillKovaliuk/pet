import { ShadowPreview } from '../../previews';
import { ITableColumnProps } from '../../table';
import { IVariableProps } from '../variables-table';

export const columns: ITableColumnProps<IVariableProps>[] = [
  {
    title: 'Variable name',
    render: (item) => item.variableName,
    width: 400,
  }, {
    title: 'Value',
    render: (item) => item.value,
  }, {
    title: 'Preview',
    render: (item) => <ShadowPreview value={item.value} />,
    align: 'center',
    width: 150,
  },
];
