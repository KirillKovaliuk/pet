import { ITableColumnProps } from '../../table';

export interface IVariableProps {
  variableName: string;
  value: string;
}

export interface IVariablesTableProps {
  section: string;
  columns: ITableColumnProps<IVariableProps>[];
}

export interface IThemeColorsTableProps {
  section: string;
}
