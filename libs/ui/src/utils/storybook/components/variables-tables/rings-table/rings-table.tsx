import { VariablesTable } from '../variables-table/variables-table';

import { columns } from './rings-table.constants';

export function RingsTable() {
  return <VariablesTable section="ring" columns={columns} />;
}
