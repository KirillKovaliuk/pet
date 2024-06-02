import { VariablesTable } from '../variables-table/variables-table';

import { columns } from './shadows-table.constants';

export function ShadowsTable() {
  return <VariablesTable section="shadow" columns={columns} />;
}
